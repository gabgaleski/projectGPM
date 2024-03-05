import { useCallback, useContext, useEffect } from "react";
import { requestData, setToken } from "../services/requests";
import { useNavigate } from "react-router-dom";
import { InfosContext } from "../context/Context";
import { MdEmail } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Header from "../components/Header";

function Profile() {
    const navigate = useNavigate()
    const { userInfo, setUserInfo } = useContext(InfosContext)

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

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) return navigate('/login')
        setToken(token)
        requestUser()
    }, [navigate, requestUser])

    return ( 
      <section>
        <Header />
        <h1>Profile</h1>
        <FaUserCircle size={25} />
        <p>Nome: { userInfo.username }</p>
        <MdEmail size={25} />
        <p>Email: { userInfo.email }</p>
      </section>
     );
}

export default Profile;