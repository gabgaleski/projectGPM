import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { requestData } from "../services/requests";
import { CarType } from "../Types/providerTypes";
import ReactModal from 'react-modal';
import Header from "../components/Header";

function CarInfos() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [carInfo, setCarInfo] = useState<CarType>({} as CarType)
    const [openModal, setOpenModal] = useState<boolean>(false);
    const initialDate = useRef<string | null>(null)
    const finalDate = useRef<string | null>(null)

    const requestInfosCar = useCallback(async () => {
        const { data } = await requestData(`/cars/${id}`)
        if (!data || data.status === 0) {
          return navigate('/')
        }
        setCarInfo(data)
    }, [id, navigate])

    // Continuar alguel do carro com registro no backend e confirmação no pagamento
    // Mudar Ref por state
    // Futuramente trocar os states que podem ser ref por ref

    const rentalCarButton = () => {
      if (!initialDate.current || !finalDate.current) {
        return alert('Preencha as datas')
      }
      const formatedInitial = new Date(initialDate.current)
      const formatedFinal = new Date(finalDate.current)

      if (formatedInitial > formatedFinal || formatedInitial < new Date()) {
        return alert('Preencha as datas corretamente')
      }

      const days = Math.abs(formatedFinal.getDate() - formatedInitial.getDate())
      const value = days * carInfo.value
      alert(`O valor total do aluguel é de R$ ${value}`)
    }


  useEffect(() => {
    requestInfosCar()
    if (!openModal) {
      initialDate.current = null
      finalDate.current = null
    }
  }, [requestInfosCar, openModal])

  if (!carInfo || !carInfo.carDetails) {
    return (<p>Loading...</p>)
  }
  return ( 
    <section>
      <Header />
      <div>
        <h1>{carInfo.name}</h1>
        <p>{carInfo.brand}</p>
        <p>{carInfo.value}</p>
        <p>{carInfo.description}</p>
        <img src={carInfo.images} alt="Imagem do Carro" />
        <p>{carInfo.carDetails.capacity}</p>
        <p>{carInfo.carDetails.year}</p>
        <p>{carInfo.carDetails.gear}</p>
      </div>
      <button onClick={() => setOpenModal(true)}>Alugar</button>
      <ReactModal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
        }
      }}
      >
        <div>
          <p>Voce esta alugando um: <strong>{carInfo.name}</strong></p>
          <p>Valor por dia e quantidade de dias</p>
          <p>Falando sobre a forma de alguel e garantias</p>
          <p>Informaçoes para o aluguel em um forms</p>
        </div>
        <div>
          <label htmlFor="initial">Retirada do carro</label>
          <input
          id="initial"
          type="date"
          itemRef="initialDate"
          onChange={(e) => initialDate.current = e.target.value}
          />
          <label htmlFor="final">Devolutiva do carro</label>
          <input
          id="final"
          type="date"
          itemRef="finalDate"
          onChange={(e) => finalDate.current = e.target.value}
          />
        </div>
        <button onClick={rentalCarButton} >ALUGAR</button>
        <button onClick={() => setOpenModal(false)}>SAIR</button>
      </ReactModal>
    </section>
   );
}

export default CarInfos;