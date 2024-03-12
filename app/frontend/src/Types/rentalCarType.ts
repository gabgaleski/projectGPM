import { CarType } from "./providerTypes";

export type RentalCarType = {
  id: number;
  userId: number;
  carId: number;
  initialDate: Date;
  finalDate: Date;
  car: CarType;
}