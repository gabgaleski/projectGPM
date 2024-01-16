import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('cars_details', [
      {
        car_id: 1,
        year: 2015,
        capacity: 4,
        gear: 'Automatico',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('cars_details', {});
  },
}