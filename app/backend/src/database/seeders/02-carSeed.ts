import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('cars', [
      {
        name: 'Fiat Mobi 1.0, Renault Kwid',
        status: 0,
        description: 'Carro ideal para a familia',
        brand: 'Renault',
        images: '',
        value: 58
      },
      {
        name: 'Fiat Argo 1.0, Hyundai HB20',
        status: 1,
        description: 'Carro',
        brand: 'Teste',
        images: '',
        value: 69
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('cars', {});
  },
}