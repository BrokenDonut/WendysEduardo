import "./Navbar.css";
import logo from './logo.jpg'

export const Navbar = () => {
  return (
    <header className="header">
      <img src={logo} className="app-logo" alt="logo"></img>
      <ul className="header-list">
        <li>
          <a className="a-hover" href="/#nosotros">
            Nosotros
          </a>
        </li>
        <li>
          <a className="a-hover" href="/productos">
            Productos
          </a>
        </li>
        <li>
          <a className="a-hover" href="/#contacto">
            Contactanos
          </a>
        </li>
        <li>
          <a className="a-hover" href="/#aliados">
            Clientes
          </a>
        </li>
      </ul>
      <ul className="header-button">
        <button className="button" onClick={() => window.location.href = '/login'}>Login</button>
        <button className="button" onClick={() => window.location.href = '/register'}>Register</button>
      </ul>
    </header>
  );
};
