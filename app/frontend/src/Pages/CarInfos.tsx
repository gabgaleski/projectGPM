import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { requestData } from "../services/requests";
import { CarType } from "../Types/provierTypes";
import ReactModal from 'react-modal';

function CarInfos() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [carInfo, setCarInfo] = useState<CarType>({} as CarType)
    const [openModal, setOpenModal] = useState<boolean>(true);

    const requestInfosCar = useCallback(async () => {
        const { data } = await requestData(`/cars/${id}`)
        if (!data || data.status === 0) {
          return navigate('/')
        }
        setCarInfo(data)
    }, [id, navigate])

  useEffect(() => {
    requestInfosCar()
  }, [requestInfosCar])


  if (!carInfo || !carInfo.carDetails) {
    return (<p>Loading...</p>)
  }
  return ( 
    <section>
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
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
        }, overlay: {
          opacity: "0.9",
        }
      }}
      >
        <p>Infos do carro</p>
        <p>Imagem do carro</p>
        <p>Valor por dia e quantidade de dias</p>
        <p>Falando sobre a forma de alguel e garantias</p>
        <p>Informaçoes para o aluguel em um forms</p>
        <button>ALUGAR</button>
        <button onClick={() => setOpenModal(false)}>SAIR</button>
      </ReactModal>
    </section>
   );
}

export default CarInfos;