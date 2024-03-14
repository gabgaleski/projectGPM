import { RentalCarType } from "../Types/rentalCarType";

function RentalCarCards(car: RentalCarType) {

  const initialDate = new Date(car.initialDate).getDate();
  const initialDay = new Date(car.initialDate).getMonth() + 1;
  const initialYear = new Date(car.initialDate).getFullYear();

  const finalDate = new Date(car.finalDate).getDate();
  const finalDay = new Date(car.finalDate).getMonth() + 1;
  const finalYear = new Date(car.finalDate).getFullYear();

  const options = { minimumIntegerDigits: 2 };

  // Mudar o Layout das datas
  // Implementar se o aluguel ta ativo ou nao

  return ( 
  <div key={car.id}>
    <div>
      <img src={car.car.images} alt="Imagem do carro" />
      <p>{car.car.name}</p>
      <p>{car.car.brand}</p>
      <p>R$: {car.car.value} / Dia</p>
    </div>
    <p>Alugado no dia:</p>
    <p>{initialDate.toLocaleString('pt-BR', options)} / {initialDay.toLocaleString('pt-BR', options)} / {initialYear}</p>
    <p>Termina no dia:</p>
    <p>{finalDate.toLocaleString('pt-BR', options)} / {finalDay.toLocaleString('pt-BR', options)} / {finalYear}</p>
  </div> 
  );
}

export default RentalCarCards;