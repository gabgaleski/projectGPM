import logo from '../assets/logo1.png';

function Header() {

  return ( 
    <header>
      <img src={ logo } width={150} />
      <p>AluCar</p>
      <span>O lugar certo para alugar carros</span>
    </header>
  );
}

export default Header;