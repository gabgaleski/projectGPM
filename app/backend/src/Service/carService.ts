import CarModel from "../database/models/carModel";
import CarDetailsModel from "../database/models/carsDetailsModel";
import ICar from "../interfaces/ICar/ICar";
import ICrudCar from "../interfaces/ICar/ICrudCar";

export default class CarService implements ICrudCar {

    public async findAll(): Promise<ICar[] | null> {
        const getCar = await CarModel.findAll({
            include: [
                {
                    model: CarDetailsModel,
                    as: 'carDetails',
                    attributes: ['year', 'capacity', 'gear'],
                },
            ],
        });
        return getCar
    }

    public async update(id: string, infos: ICar): Promise<{message: string}> {
        const getCar = await CarModel.findOne({where: { id }})
        if(!getCar) return {message: "Car not found"}

        const [updateCar] = await CarModel.update(infos, {where: { id }})
        if(updateCar !== 1) return { message: "ERROR" }

        return { message: "SUCCESS" };
    }
}