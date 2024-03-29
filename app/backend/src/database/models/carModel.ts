import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
    import db from '.';
import CarDetailsModel from './carsDetailsModel';
  
  class CarModel extends Model<InferAttributes<CarModel>,
  InferCreationAttributes<CarModel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare status: number;
    declare description: string;
    declare brand: string;
    declare value: number;
    declare images: string;
  }
  
  CarModel.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    images: {
        type: DataTypes.STRING,
        defaultValue: 'https://cdn-icons-png.flaticon.com/512/4989/4989564.png'
    }
  }, {
    sequelize: db,
    modelName: 'cars',
    timestamps: false,
    underscored: true,
  });

  CarModel.hasOne(CarDetailsModel, {
    foreignKey: 'carId',
    as: 'carDetails',
  });
  
  export default CarModel;