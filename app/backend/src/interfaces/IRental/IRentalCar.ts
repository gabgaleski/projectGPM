
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

export interface IRentalCarsAll extends IRentalCar {
    car: {
        id: number;
        name: string;
        status: number;
        description: string;
        brand: string;
        images: string;
        value: number;
    }
}