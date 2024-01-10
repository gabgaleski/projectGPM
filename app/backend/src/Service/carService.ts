import CarModel from "../database/models/carModel";
import ICar from "../interfaces/ICar.ts/ICar";
import ICrudCar from "../interfaces/ICar.ts/ICrudCar";

export default class CarService implements ICrudCar {

    public async findAll(): Promise<ICar[] | null> {
        const getCar = await CarModel.findAll();
        return getCar
    }
}