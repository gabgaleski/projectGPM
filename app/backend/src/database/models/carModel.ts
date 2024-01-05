import {
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from 'sequelize';
    import db from '.';
  
  class CarModel extends Model<InferAttributes<CarModel>,
  InferCreationAttributes<CarModel>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare status: number;
    declare description: string;
    declare brand: string;
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
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    images: {
        type: DataTypes.STRING,
    }
  }, {
    sequelize: db,
    modelName: 'cars',
    timestamps: false,
    underscored: true,
  });

  
  export default CarModel;