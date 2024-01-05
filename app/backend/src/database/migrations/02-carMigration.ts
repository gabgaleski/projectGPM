import { Model, QueryInterface, DataTypes } from 'sequelize';
import ICar from '../../interfaces/ICar.ts/ICar';

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
      },
      status: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
      brand: {
        type: DataTypes.STRING,
      },
      images: {
        type: DataTypes.STRING
      }
    });
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('cars');
  },
};