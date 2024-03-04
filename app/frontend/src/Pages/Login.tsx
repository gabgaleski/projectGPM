import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { requestPost, setToken } from "../services/requests";
import { useState } from "react";
import { LoginType } from "../Types/loginType";
import React from "react";

const initialValue: LoginType = {
  email: '',
  password: ''
}

function Login() {
  const [loginInfo, setLoginInfo] = useState<LoginType>(initialValue)
  const navigate: NavigateFunction = useNavigate()

  const handleChangeInputs = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target
    setLoginInfo((state: LoginType) => ({
      ...state,
      [name]: value
    }))
  }

  const clickButtonLogin = async (): Promise<void> => {
    try {
      const { data } = await requestPost<LoginType>('/login', loginInfo);
      setToken(data.token)
      localStorage.setItem('token', data.token)
      return navigate('/')
    } catch (error) {
      return console.log(error)
    }
  }

  return ( 
    <form>
      <h1>Login</h1>
      <input
      type="email"
      placeholder="Email"
      name="email"
      value={ loginInfo.email }
      onChange={(e) => handleChangeInputs(e)}
      />

      <input
      type="password"
      name="password"
      placeholder="Password"
      value={ loginInfo.password }
      onChange={(e) => handleChangeInputs(e)}
      />

      <button
      type="button"
      onClick={ clickButtonLogin }
      >Entrar</button>
      <Link to="/register">Criar Conta</Link>
    </form>
   );
}

export default Login;