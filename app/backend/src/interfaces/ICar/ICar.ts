import ICarDetails from "../ICarDetails/ICarDetails";

export default interface ICar {
    id: number;
    name: string;
    status: number;
    description: string;
    brand: string;
    images: string;
    value: number;
}

export interface IDetailsCar extends ICar {
    carDetails: ICarDetails;
}