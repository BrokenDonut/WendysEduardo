import { useState } from "react";
import "./ModuloProducto.css";

export const ModuloProducto = ({imagen,nombre,precio}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0) {
      setCount(value);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="vinetaProducto">
      <div className="container-producto">
        <img src={imagen} alt="Lechuga Orgánica" className="vinetaImagen" />
        <h2 className="vinetatitulo">{nombre}</h2>
        <div className="content-info">
          <h4 className="vinetaPrecio">S/ {precio}</h4>
          <div className="content-numeric">
            <button onClick={decrement} className="button-indes">
              -
            </button>
            <input
              type="number"
              value={count}
              inputMode="numeric"
              onChange={handleChange}
              className="input-numeric"
            />
            <button onClick={increment} className="button-indes">
              +
            </button>
          </div>

          <button type="submit" className="button-submit">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};
