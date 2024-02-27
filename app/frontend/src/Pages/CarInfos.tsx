import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { requestData } from "../services/requests";
import { CarType } from "../Types/provierTypes";

const initialValue = {
    carInfo: {} as CarType,
    setCarInfo: () => {},
}

function CarInfos() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [carInfo, setCarInfo] = useState<CarType>(initialValue.carInfo)

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


  return ( 
    <section>
      <h1>{carInfo.name}</h1>
      <p>{carInfo.brand}</p>
      <p>{carInfo.value}</p>
      <p>{carInfo.description}</p>
      <img src={carInfo.images} alt="Imagem do Carro" />
    </section>
   );
}

export default CarInfos;