import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useContext, useEffect, useCallback } from "react";
import { InfosContext } from "../context/Context";
import CardCar from "../components/CardCar";
import { requestData } from "../services/requests";

function Cars() {
    const { carList, setCarList, filtredCars, setFiltredCars } = useContext(InfosContext)

    const requestCars = useCallback(async() => {
        const { data } = await requestData('/cars');
        setCarList(data)
      }, [setCarList])

    useEffect(() => {
        if (carList.length <= 0) {
            requestCars()
        }
        if (filtredCars.length === 0) {
          setFiltredCars(carList)
        } // Corrigir reset de filtros
    }, [requestCars, carList, setCarList, setFiltredCars, filtredCars])

    return ( 
      <section>
        <Header />
        <SearchBar />
        <div>
            <p>Filtrar por ano</p>
            <p>Filtrar por marca</p>
            <p>Filtrar por cambio</p>
            <p>Filtra por valor</p>
        </div>
        <div>
          <h3>Carros Disponiveis</h3>
          { 
            filtredCars.filter((car) => car.status === 1).map((car) => CardCar(car))
          }
        </div>
      </section>
     );
}

export default Cars;