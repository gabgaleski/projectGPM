import { useContext } from "react";
import { InfosContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { searchCar, setSearchCar } = useContext(InfosContext)
  const navigate = useNavigate();

  const onClickButton = (): void => {
    navigate('/cars')
  }

  return ( 
    <form>
      <input
      onChange={({ target }) => setSearchCar(target.value)}
      value={ searchCar }
      name="searchCar"
      type="search"
      placeholder="Digite o nome do carro"
      />
      <button
      onClick={onClickButton}
      disabled={searchCar.length <= 0}
      >Pesquisar</button>
    </form>
  );
}

export default SearchBar;