import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

function Home() {
  return ( 
    <>
      <Header />
      <SearchBar />
      <section>
        <p>Informaçoes sobre a Alucar</p>
        <p>Carrousel de imagens dos 3 primeiros carros</p>
        <p>Informações sobre a retirada dos carros e formas de pagamento</p>
        <p>Onde atua</p>
        <p>Footer com infos</p>
      </section>
    </>
  );
}

export default Home;