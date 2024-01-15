import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('rental_cars', [
      {
        car_id: 1,
        user_id: 1,
        initial_date: new Date('Aug 12 2011 20:44:55'),
        final_date: new Date('Aug 15 2011 20:44:55')
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('rental_cars', {});
  },
}