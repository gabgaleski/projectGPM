import { useState } from "react";
import { InfosType } from "../Types/registerTypes";

const initialValue: InfosType = {
    username: '',
    email: '',
    password: ''
}

function Register() {
    const [registerInfo, setRegisterInfo] = useState<InfosType>(initialValue)
    return ( 
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <button>Criar conta</button>
        </form>
     );
}

export default Register;