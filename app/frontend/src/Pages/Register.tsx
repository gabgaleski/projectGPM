import React from "react";
import { useState } from "react";
import { InfosType } from "../Types/registerTypes";
import { requestPost } from "../services/requests";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";

const initialValue: InfosType = {
    username: '',
    email: '',
    password: ''
}

function Register() {
    const [registerInfo, setRegisterInfo] = useState<InfosType>(initialValue)


    const handleChangeInputs = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = target;
        setRegisterInfo((state:InfosType) => ({
            ...state,
            [name]: value
        }))
    }


    const onClickRequest = async () => {
        try {
            const response = await requestPost('/users', registerInfo)
            if (response.status === 201) {
                return alert("Conta criada")
            }
        } catch (error) {
            const errorResponse = error as AxiosError;
            if (errorResponse.response?.status === 409) {
                return alert("Email já cadastrado")
            }

            return alert("Erro ao criar conta")

        }

    }

    return ( 
        <form>
            <label htmlFor="username">Username</label>
            <input
            onChange={(e) => handleChangeInputs(e)}
            value={ registerInfo.username }
            name="username"
            type="text"
            id="username" />

            <label htmlFor="email">Email</label>
            <input
            onChange={(e) => handleChangeInputs(e)}
            value={ registerInfo.email }
            name="email"
            type="email"
            id="email" />

            <label htmlFor="password">Password</label>
            <input
            onChange={(e) => handleChangeInputs(e)}
            value={ registerInfo.password }
            name="password"
            type="password"
            id="password" />
            <Link to="/login">Já tem uma conta? Faça login</Link>
            <button
            type="button"
            onClick={onClickRequest}
            >Criar conta</button>
        </form>
     );
}

export default Register;