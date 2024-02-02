import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('cars', [
      {
        name: 'Kwid',
        status: 0,
        description: 'Carro ideal para a familia',
        brand: 'Renault',
        images: '',
        value: 95
      },
      {
        name: 'HB20',
        status: 1,
        description: 'Carro',
        brand: 'Teste',
        images: '',
        value: 120
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('cars', {});
  },
}