import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { MdCarRental } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { useCallback, useContext, useEffect } from "react";
import { InfosContext } from "../context/Context";
import { requestData } from "../services/requests";

function Home() {
  const { carList, setCarList } = useContext(InfosContext);

  // list.split(' ')[0] para pegar a primeira imagem

  const requestCars = useCallback(async() => {
    const { data } = await requestData('/cars');
    setCarList(data)
  }, [setCarList])

  useEffect(() => {
    if (carList.length === 0) {
      requestCars()
    }
  }, [requestCars, carList])

  return ( 
    <>
      <Header />
      <SearchBar />
      <section>

        <div className="cards">
          <div>
            <MdCarRental size={40} />
            <h3>Como funciona</h3>
            <p>Ao entrar na sua conta, basta escolher o carro que quer, nos dias que quer e pronto, ja pode retirar seu carro. Muito facil nao é mesmo 😁</p>
          </div>
          <div>
            <MdOutlineVerifiedUser size={40} />
            <h3>Por que alugar na Alucar?</h3>
            <p>Porque levamos a segurança e a confiança para nossos clientes, garantindo uma viagem tranquila e sem imprevistos</p>
          </div>
        </div>

        <p>Carrousel de imagens dos 3 primeiros carros</p>
        <p>Informações sobre a retirada dos carros e formas de pagamento</p>
        <p>Footer com infos</p>
      </section>
    </>
  );
}

export default Home;