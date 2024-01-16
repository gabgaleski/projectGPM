import RentalCarModel from "../database/models/rentalCarModel";
import ICrudRentalCar from "../interfaces/IRental/ICrudRental";
import IRentalCar from "../interfaces/IRental/IRentalCar";

export default class RentalCarService implements ICrudRentalCar {
    
    public async findAll(): Promise<IRentalCar[] | null> {
        const getAll = await RentalCarModel.findAll();
        return getAll;
    }
}