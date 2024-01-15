import IRentalCar from "./IRentalCar";

export default interface ICrudRentalCar {
    findAll(): Promise<IRentalCar[] | null>
}