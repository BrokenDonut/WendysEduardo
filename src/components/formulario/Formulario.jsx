import FondoForm from './fondo-form.jpg'
import './Formulario.css'

export const Formulario = () => {
  return (
    <>
      <div className="container-form" id="contacto">
        <img src={FondoForm} alt="fondoForm" className="form-img"></img>
        <div className="form-comunication">
          <h1>¿Quieres conversar?</h1>
          <form className="form-container" >
            <label htmlFor="nombre">Nombre</label>
            <input
              className="input-container"
              type="text"
              placeholder="Nombre"
              id="nombre"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              className="input-container"
              type="email"
              placeholder="Email"
              id="email"
              required
            />
            <label htmlFor="telefono">Teléfono</label>
            <input
              className="input-container"
              type="number"
              placeholder="Teléfono"
              id="telefono"
              required
            />
            <label htmlFor="distrito">Distrito</label>
            <input
              className="input-container"
              type="text"
              placeholder="Distrito"
              id="distrito"
              required
            />
            <label htmlFor="direccion">Direccion</label>
            <input
              className="input-container"
              type="text"
              placeholder="Direccion"
              id="direccion"
              required
            />
            <textarea
              placeholder="Mensaje"
              className="input-textarea"
              required
            ></textarea>
            <button className="form-button">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
};
