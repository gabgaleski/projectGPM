import { createContext, useState, useMemo } from "react";
import { ReactPropsType, ContextType, CarType } from "../Types/provierTypes";

const initialValue = {
  searchCar: '',
  setSearchCar: () => {},
  carList: [] as CarType[],
  setCarList: () => {},
  filtredCars: [] as CarType[],
  setFiltredCars: () => {},
}

export const InfosContext = createContext<ContextType>(initialValue);

function ContextProvider({ children }: ReactPropsType) {
  const [searchCar, setSearchCar] = useState(initialValue.searchCar);
  const [carList, setCarList] = useState(initialValue.carList);
  const [filtredCars, setFiltredCars] = useState(initialValue.filtredCars);

  const values = useMemo(() => ({
    searchCar,
    setSearchCar,
    carList,
    setCarList,
    filtredCars,
    setFiltredCars
  }), [
    searchCar,
    setSearchCar,
    carList,
    setCarList,
    filtredCars,
    setFiltredCars
  ])

  return ( 
    <InfosContext.Provider value={values}>
      {children}
    </InfosContext.Provider>
   );
}

export default ContextProvider;
