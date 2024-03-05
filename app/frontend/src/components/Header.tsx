import '../styles/header.scss';
import { FaCarSide } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Header() {
        //Implementar mudança de quando estiver logado ou nao
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
          <Link to="/profile" className='nav-link'>Minhas Reservas</Link>
          <Link to="/login" className='nav-link'>Login</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;