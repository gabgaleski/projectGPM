import { Link } from "react-router-dom";

function Login() {
  return ( 
    <form>
      <h1>Login</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="button">Entrar</button>
      <Link to="/register">Criar Conta</Link>
    </form>
   );
}

export default Login;