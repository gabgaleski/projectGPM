import React from "react";
import { useState } from "react";
import { InfosType } from "../Types/registerTypes";
import { requestPost } from "../services/requests";
import { AxiosError } from "axios";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const initialValue: InfosType = {
    username: '',
    email: '',
    password: ''
}

function Register() {
    const [registerInfo, setRegisterInfo] = useState<InfosType>(initialValue)
    const navigate:NavigateFunction = useNavigate()

    const handleChangeInputs = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = target;
        setRegisterInfo((state:InfosType) => ({
            ...state,
            [name]: value
        }))
    }


    const onClickRequest = async (): Promise<void> => {
        try {
            const response = await requestPost<InfosType>('/users', registerInfo)
            if (response.status === 201) {
                alert("Conta criada")
                return navigate('/login');
            }
        } catch (error) {
            const errorResponse = error as AxiosError;
            if (errorResponse.response?.status === 409) {
                return alert("Email já cadastrado")
            }

            return alert("Erro ao criar conta, preencha os campos corretamente")

        }

    }

    return (
        <>
          <Header />
          <form>
              <label htmlFor="username">Nome</label>
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
        </>
     );
}

export default Register;