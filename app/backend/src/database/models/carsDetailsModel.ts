import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
    import db from '.';
  
  class CarDetailsModel extends Model<InferAttributes<CarDetailsModel>,
  InferCreationAttributes<CarDetailsModel>> {
    declare id: CreationOptional<number>;
    declare carId: number;
    declare year: number;
    declare capacity: number;
    declare gear: string;
  }
  
  CarDetailsModel.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    carId: {
      type: DataTypes.INTEGER,
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
  }, {
    sequelize: db,
    modelName: 'carsDetails',
    timestamps: false,
    underscored: true,
  });

  export default CarDetailsModel;