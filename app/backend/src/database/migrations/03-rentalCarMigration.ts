import { Model, QueryInterface, DataTypes } from 'sequelize';
import IRentalCar from '../../interfaces/IRental.ts/IRentalCar';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IRentalCar>>('rental_cars', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      carId: {
        type: DataTypes.INTEGER,
        field: 'car_id'
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id'
      },
      initialDate: {
        type: DataTypes.DATE,
        field: 'initial_date'
      },
      finalDate: {
        type: DataTypes.DATE,
        field: 'final_date'
      },
    });
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('rental_cars');
  },
};