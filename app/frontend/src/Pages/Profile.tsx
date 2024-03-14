import { useCallback, useContext, useEffect, useState } from "react";
import { requestData, setToken } from "../services/requests";
import { useNavigate } from "react-router-dom";
import { InfosContext } from "../context/Context";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Header from "../components/Header";
import { userProfile } from "../Types/providerTypes";
import { RentalCarType } from "../Types/rentalCarType";
import RentalCarCards from "../components/RentalCarsCard";

function Profile() {
    const navigate = useNavigate()
    const { userInfo, setUserInfo } = useContext(InfosContext)
    const [userCarsInfo, setUserCarsInfo] = useState<RentalCarType[]>([])

    const requestUser = useCallback(async() => {
        try {
            const response = await requestData('/users')
            return setUserInfo(response.data)
        } catch (error) {
            localStorage.removeItem("token")
            alert("Realize o login")
            navigate('/')
        }
    }, [setUserInfo, navigate])

    const requestRentalCars = useCallback(async () => {
        try {
            const responseCars = await requestData('/rental-cars/user');
            if (responseCars.data.message !== "No cars listed") {
                return setUserCarsInfo(responseCars.data);
            }
        } catch (error) {
            return alert("Erro")
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return navigate('/login')
        setToken(token)
        requestUser()
        requestRentalCars()
    }, [navigate, requestUser, requestRentalCars])

    const initialValueProfile: userProfile = {
        email: '',
        username: '',
        role: '',
    }

    const logoutButton = (): void => {
        localStorage.removeItem("token")
        setUserInfo(initialValueProfile)
        navigate('/')
    }

    return (
      <section>
        <Header />
        <h1>Profile</h1>
        <FaUserCircle size={25} />
        <p>Nome: { userInfo.username }</p>
        <MdEmail size={25} />
        <p>Email: { userInfo.email }</p>
        <button
        type="button"
        onClick={ logoutButton }
        >Deslogar</button>
        <div>
            <h2>Carros Alugados</h2>
            {userCarsInfo.map((car) => RentalCarCards(car))}
        </div>
      </section>
     );
}

export default Profile;