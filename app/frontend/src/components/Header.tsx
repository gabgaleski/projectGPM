import { useContext } from 'react';
import '../styles/header.scss';
import { FaCarSide } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { InfosContext } from '../context/Context';
import { CiLogin } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

function Header() {
  const { userInfo } = useContext(InfosContext)
  const { username } = userInfo

  const userNavigate = <Link to="/profile" className='nav-link'>{<FaRegUser />} { username }</Link>
  const loginNavigate = <Link to="/login" className='nav-link'>{<CiLogin />} Login</Link>;


  return ( 
    <header className="header">
      <div className='logo'>
        <FaCarSide size={50} color='#5BC3EB' />
        <h1>
          <Link className='title-logo' to="/">
            Alu<span className='span-car'>car</span>
          </Link>
        </h1>
      </div>
      <nav className='nav-header'>
        <ul className='nav-car'>
          <Link to="/cars" className='nav-link'>Carros Disponiveis</Link>
          <Link to="/about" className='nav-link'>Sobre a Alucar</Link>
        </ul>
        <ul className='nav-person'>
          {username ? userNavigate : loginNavigate}
        </ul>
      </nav>
    </header>
  );
}

export default Header;