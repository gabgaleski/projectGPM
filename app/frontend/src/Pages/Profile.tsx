import { useEffect } from "react";
import { setToken } from "../services/requests";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            return navigate('/login')
        }
        setToken(token)
    }, [navigate])

    return ( <h1>Profile</h1> );
}

export default Profile;