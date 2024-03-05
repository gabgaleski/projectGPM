import { createContext, useState, useMemo } from "react";
import { ReactPropsType, ContextType, CarType, userProfile } from "../Types/providerTypes";

const initialValue = {
  searchCar: '',
  setSearchCar: () => {},
  carList: [],
  setCarList: () => {},
  filtredCars: [],
  setFiltredCars: () => {},
  userInfo: {} as userProfile,
  setUserInfo: () => {},
}

export const InfosContext = createContext<ContextType>(initialValue);

function ContextProvider({ children }: ReactPropsType) {
  const [searchCar, setSearchCar] = useState<string>(initialValue.searchCar);
  const [carList, setCarList] = useState<CarType[]>(initialValue.carList);
  const [filtredCars, setFiltredCars] = useState<CarType[]>(initialValue.filtredCars);
  const [userInfo, setUserInfo] = useState<userProfile>(initialValue.userInfo)

  const values = useMemo(() => ({
    searchCar,
    setSearchCar,
    carList,
    setCarList,
    filtredCars,
    setFiltredCars,
    userInfo,
    setUserInfo
  }), [
    searchCar,
    setSearchCar,
    carList,
    setCarList,
    filtredCars,
    setFiltredCars,
    userInfo,
    setUserInfo
  ])

  return ( 
    <InfosContext.Provider value={values}>
      {children}
    </InfosContext.Provider>
   );
}

export default ContextProvider;
