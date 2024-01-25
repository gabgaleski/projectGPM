import CarModel from "../database/models/carModel";
import RentalCarModel from "../database/models/rentalCarModel";
import ICrudRentalCar from "../interfaces/IRental/ICrudRental";
import IRentalCar, { ICreateRentalCar } from "../interfaces/IRental/IRentalCar";

export default class RentalCarService implements ICrudRentalCar {
    
    public async findAll(): Promise<IRentalCar[] | null> {
        const getAll = await RentalCarModel.findAll();
        return getAll;
    }

    public async create(carId: string, userId: number, infos: ICreateRentalCar): Promise<{message: string}> {
        const getCar = await CarModel.findByPk(carId);

        if(!getCar || getCar.status === 1) {
            return { message: "Car not found or rented" }
        }

        const allInfos = { carId: Number(carId), userId, ...infos }
        const create = await RentalCarModel.create(allInfos);

        if (!create) return {message: "ERROR"}

        return {message: "SUCCESS"}
    }
}