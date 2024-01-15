import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
    import db from '.';
import UserModel from './userModel';
import CarModel from './carModel';
  
  class RentalCarModel extends Model<InferAttributes<RentalCarModel>,
  InferCreationAttributes<RentalCarModel>> {
    declare id: CreationOptional<number>;
    declare userId: number;
    declare carId: number;
    declare initialDate: Date;
    declare finalDate: Date;
  }
  
  RentalCarModel.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    initialDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finalDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize: db,
    modelName: 'rentalCars',
    timestamps: false,
    underscored: true,
  });

  RentalCarModel.belongsTo(UserModel, {
      foreignKey: 'userId',
      as: 'user',
  });

  RentalCarModel.belongsTo(CarModel, {
    foreignKey: 'carId',
    as: 'car',
  });

  
  export default RentalCarModel;