import { Model, QueryInterface, DataTypes } from 'sequelize';
import IRentalCar from '../../interfaces/IRental/IRentalCar';

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
        field: 'car_id',
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false,
      },
      initialDate: {
        type: DataTypes.DATE,
        field: 'initial_date',
        allowNull: false,
      },
      finalDate: {
        type: DataTypes.DATE,
        field: 'final_date',
        allowNull: false,
      },
    });
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('rental_cars');
  },
};