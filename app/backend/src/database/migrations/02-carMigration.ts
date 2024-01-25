import { Model, QueryInterface, DataTypes } from 'sequelize';
import ICar from '../../interfaces/ICar/ICar';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICar>>('cars', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      images: {
        type: DataTypes.STRING,
        defaultValue: 'https://cdn-icons-png.flaticon.com/512/4989/4989564.png',
      }
    });
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('cars');
  },
};