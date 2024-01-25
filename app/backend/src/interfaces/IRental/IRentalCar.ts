export default interface IRentalCar {
    id: number;
    userId: number;
    carId: number;
    initialDate: Date;
    finalDate: Date;
}

export interface ICreateRentalCar {
    initialDate: Date;
    finalDate: Date;
}