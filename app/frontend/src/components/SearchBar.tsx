import { useContext } from "react";
import { InfosContext } from "../context/Context";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBar() {
  const { searchCar, setSearchCar, setFiltredCars, carList } = useContext(InfosContext)
  const navigate = useNavigate();
  const location = useLocation();

  const onClickButton = (): void => {
    const newList = carList.filter((car) => car.name.toLowerCase()
    .includes(searchCar.toLowerCase()));

    setFiltredCars(newList)

    if (location.pathname === '/') {
      navigate('/cars')
    }
  }

  return ( 
    <form>
      <input
      onChange={({ target }) => setSearchCar(target.value)}
      value={ searchCar }
      name="searchCar"
      type="text"
      placeholder="Digite o nome do carro"
      />
      <button
      type="button"
      onClick={onClickButton}
      disabled={searchCar.length <= 0}
      >
        Pesquisar
      </button>
    </form>
  );
}

export default SearchBar;