import { Link } from "react-router-dom";
import { CarType } from "../Types/providerTypes";

function CardCar(car: CarType) {
  const navegateToCar = `/cars/${car.id}`;

  return ( 
    <div key={car.id}>
      <img src={car.images} alt="Carro" />
      <h5>{car.name}</h5>
      <p>{car.description}</p>
      <p>{car.value}</p>
      <Link to={ navegateToCar } >Mais detalhes</Link>
    </div>
  );
}

export default CardCar;