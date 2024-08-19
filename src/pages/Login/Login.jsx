import VegetalesCarrito from "./vegetables.jpg";
import "./Login.css";

export const Login = () => {
  return (
    <>
      <div className="container-form-login">
        <div className="sphere"></div>
        <div className="login-form">
          <img src={VegetalesCarrito} alt="img" className="login-img"></img>
          <div className="form-input">
            <form action="" className="form-login">
              <h1>Hola de Nuevo!</h1>
              <p className="form-parrafo">Bienvenido, porfavor ingresar sus datos</p>
              <input type="text" placeholder="User name" required />
              <input type="password" placeholder="Contraseña" required/>
              <button className="button-3">Ingresar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
