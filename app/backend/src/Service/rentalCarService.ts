import RentalCarModel from "../database/models/rentalCarModel";
import ICrudRentalCar from "../interfaces/IRental.ts/ICrudRental";
import IRentalCar from "../interfaces/IRental.ts/IRentalCar";

export default class RentalCarService implements ICrudRentalCar {
    
    public async findAll(): Promise<IRentalCar[] | null> {
        const getAll = await RentalCarModel.findAll();
        return getAll;
    }
}