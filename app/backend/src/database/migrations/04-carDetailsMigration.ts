import { Model, QueryInterface, DataTypes } from 'sequelize';
import ICarDetails from '../../interfaces/ICarDetails/ICarDetails';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICarDetails>>('cars_details', {
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
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gear: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('cars_details');
  },
};