import { Model, QueryInterface, DataTypes } from 'sequelize';
import IUser from '../../interfaces/Iuser/IUser';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IUser>>('users', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
      },
    });
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('users');
  },
};