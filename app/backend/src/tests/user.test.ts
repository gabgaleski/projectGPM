/* eslint-disable @typescript-eslint/no-explicit-any */
import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import { mockUserReturnAll } from './mocks/userMock';

import { app } from '../app';
import UserModel from '../database/models/userModel';
// import JWT from '../auth/JTW';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes no endpoint /users', async () => {
    it('Testa rota /users com metodo GET', async () => {
        sinon.stub(UserModel, 'findAll').resolves(mockUserReturnAll as any);

        const response = await chai.request(app).get('/users');

        expect(response.status).to.be.equal(200);
    });

    afterEach(() => {
        sinon.restore();
      });
})