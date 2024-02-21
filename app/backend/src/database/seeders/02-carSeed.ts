import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('cars', [
      {
        name: 'Renault Kwid',
        status: 0,
        description: 'Carro ideal para a familia',
        brand: 'Renault',
        images: '',
        value: 58.99
      },
      {
        name: 'Fiat Mobi 1.0',
        status: 1,
        description: 'Carro ideal para a familia',
        brand: 'Fiat',
        images: '',
        value: 63.25
      },
      {
        name: 'Fiat Argo 1.0',
        status: 1,
        description: 'Carro',
        brand: 'Fiat',
        images: '',
        value: 69.86
      },
      {
        name: 'Hyundai HB20',
        status: 1,
        description: 'Carro',
        brand: 'Hyundai',
        images: '',
        value: 86.55
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('cars', {});
  },
}