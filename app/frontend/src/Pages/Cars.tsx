import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useContext, useEffect, useCallback, useState } from "react";
import { InfosContext } from "../context/Context";
import CardCar from "../components/CardCar";
import { requestData } from "../services/requests";
import hyndai from '../assets/hyundai.webp'
import fiat from '../assets/fiat.png'
import React from "react";

function Cars() {
    const [sortList, setSortList] = useState<string>("")
    const { 
    carList,
    setCarList,
    filtredCars,
    setFiltredCars,
    setSearchCar } = useContext(InfosContext);

    const requestCars = useCallback(async() => {
        const { data } = await requestData('/cars');
        setCarList(data)
      }, [setCarList])

    const resetFilterButton = (): void => {
      setSearchCar('')
      setSortList('')
      setFiltredCars(carList)
    }

    const ordenateCars = (event: React.ChangeEvent<HTMLSelectElement>): void => {
      const { value } = event.target
      if (value === "menor") {
        setFiltredCars(filtredCars.sort((a, b) => a.value - b.value))
        return setSortList('menor')
      }

      if (value === "maior") {
        setFiltredCars(filtredCars.sort((a, b) => b.value - a.value))
        return setSortList('maior')
      }
    }

    const handleBrandFilter = (brand: string ): void => {
        setFiltredCars(carList.filter((car) => car.brand === brand))
        setSortList('')
        setSearchCar('')
    }

    useEffect(() => {
        if (carList.length <= 0) {
            requestCars()
        }
        if (filtredCars.length === 0) {
          setFiltredCars(carList)
        }

    }, [requestCars, carList, setCarList, setFiltredCars, filtredCars])

    return ( 
      <section>
        <Header />
        <div>
          <SearchBar />
          <div>
            <select onChange={ (e) => ordenateCars(e) } name="ordenate" value={ sortList }>
              <option value="">--</option>
              <option value="menor">Menor Preço</option>
              <option value="maior">Maior Preço</option>
            </select>
            <button type="button" onClick={ () => handleBrandFilter("Hyundai") }>
              <img src={ hyndai } alt="Hyundai Logo" style={{width: "100px"}} />
            </button>
            <button type="button" onClick={ () => handleBrandFilter("Fiat") }>
              <img src={ fiat } alt="Fiat Logo" style={{width: "100px"}} />
            </button>
            <button
            type="button"
            onClick={ resetFilterButton }
            >
              Limpar Filtros
            </button>
          </div>
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