import { useState } from "react";
import Lechugaejemplo from "./lechuga-organica.jpg";
import "./Carrito.css";

export const Carrito = () => {
  const [count, setCount] = useState(0);
  const precioUnitario = 1.50; // Precio unitario del producto

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

  const calcularTotal = () => {
    return (count * precioUnitario).toFixed(2); // Multiplica cantidad por precio y redondea a 2 decimales
  };

  return (
    <div className="container-carrito">
      <h1>Carrito</h1>
      <div>
        <div className="lista-productos">
          <div className="info-icon">
            <img src={Lechugaejemplo} alt="img" className="icon-producto" />
            <section className="section-numeric">
              <h2>Organica</h2>
              <p>S/ {precioUnitario.toFixed(2)}</p>
              <div className="content-carrito">
                <div>
                  <button onClick={decrement} className="button-carrito">
                    -
                  </button>
                  <input
                    type="number"
                    value={count}
                    inputMode="numeric"
                    onChange={handleChange}
                    className="input-carrito"
                  />
                  <button onClick={increment} className="button-carrito">
                    +
                  </button>
                </div>

                <h4>S/ {calcularTotal()}</h4>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="subtotal">
        <h2>Sub total</h2>
        <p>S/ {calcularTotal()}</p>
      </div>
      <button className="button-compra" onClick={() => window.location.href = '/pagar'}>Finalizar Pedido</button>
    </div>
  );
};

