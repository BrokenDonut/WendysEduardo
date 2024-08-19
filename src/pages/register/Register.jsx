import React, { useState } from "react";
import RegisterVegetales from "./register-vegetales.jpg";
import "./Register.css";

export const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
    } else {
      setErrorMessage("");
      // Aquí puedes manejar el envío del formulario o cualquier otra lógica
      console.log("Registrado exitosamente");
    }
  };

  return (
    <>
      <div className="container-form-register">
        <div className="sphere-2"></div>
        <div className="register-form">
          <div className="form-input-register">
            <form onSubmit={handleRegister} className="form-register">
              <h1>¿Eres Nuevo?</h1>
              <p className="form-parrafo">Bienvenido, por favor ingresa tus datos</p>
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Email" required/>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Repita Contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              <button type="submit" className="button-3">
                Registrar
              </button>
            </form>
          </div>
          <img src={RegisterVegetales} alt="img" className="register-img"></img>
        </div>
      </div>
    </>
  );
};
