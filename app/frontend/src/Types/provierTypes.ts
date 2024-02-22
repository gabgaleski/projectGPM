import { ReactNode } from "react"

export type ReactPropsType = {
  children: ReactNode
}

type CarDetails = {
  year: number;
  capacity: number;
  gear: string;
}

export type CarType = {
  id: number;
  name: string;
  status: number;
  description: string;
  brand: string;
  images: string;
  value: number;
  carDetails: CarDetails
}


export type ContextType = {
  searchCar: string;
  setSearchCar: (newState: string) => void;
  carList: CarType[]
  setCarList: (newState: CarType[]) => void;
  filtredCars: CarType[];
  setFiltredCars: (newState: CarType[]) => void;
}