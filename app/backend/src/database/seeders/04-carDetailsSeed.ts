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
      {
        car_id: 2,
        year: 2019,
        capacity: 5,
        gear: 'Automatico',
      },
      {
        car_id: 3,
        year: 2016,
        capacity: 4,
        gear: 'Manual',
      },
      {
        car_id: 4,
        year: 2020,
        capacity: 5,
        gear: 'Manual',
      },
      {
        car_id: 5,
        year: 2019,
        capacity: 5,
        gear: 'Automatico',
      },
      {
        car_id: 6,
        year: 2018,
        capacity: 5,
        gear: 'Automatico',
      },
      {
        car_id: 7,
        year: 2020,
        capacity: 5,
        gear: 'Manual',
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('cars_details', {});
  },
}