import IRentalCar, { ICreateRentalCar } from "./IRentalCar";

export default interface ICrudRentalCar {
    findAll(): Promise<IRentalCar[] | null>
    create(carId: string, userId: number, infos: ICreateRentalCar): Promise<{message: string}>
    findCarsByUser(id: number): Promise<IRentalCar[] | null>
}