import Ejemplo1 from "./Huacatay.jpg";
import Ejemplo2 from "./tomate-cherry.jpg";
import { useState } from "react";
import "./Pagar.css";

export const Pagar = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => {
    setCount1(count1 + 1);
  };

  const decrement1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  };

  const handleChange1 = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0) {
      setCount1(value);
    } else {
      setCount1(0);
    }
  };

  const increment2 = () => {
    setCount2(count2 + 1);
  };

  const decrement2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }
  };

  const handleChange2 = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0) {
      setCount2(value);
    } else {
      setCount2(0);
    }
  };

  return (
    <div className="todo-container">
      <div className="pagar-container">
        <h4>La compra minima debe de ser mayor de S/ 50.00</h4>
        <div className="container-pasarela">
          <div>
            <div className="pasarela-producto">
              <img src={Ejemplo2} alt="Tomate Cherry" />
              <p>Tomate Cherry</p>
              <p>S/15.00</p>
              <div className="content-numeric">
                <button onClick={decrement1} className="button-indes">
                  -
                </button>
                <input
                  type="number"
                  value={count1}
                  inputMode="numeric"
                  onChange={handleChange1}
                  className="input-numeric"
                />
                <button onClick={increment1} className="button-indes">
                  +
                </button>
              </div>
              <p>S/ {15.0 * count1}</p>
              <button className="pagar-buttom">Eliminar</button>
            </div>
            <div className="pasarela-producto">
              <img src={Ejemplo1} alt="Huacatay" />
              <p>Huacatay</p>
              <p>S/ 4.00</p>
              <div className="content-numeric">
                <button onClick={decrement2} className="button-indes">
                  -
                </button>
                <input
                  type="number"
                  value={count2}
                  inputMode="numeric"
                  onChange={handleChange2}
                  className="input-numeric"
                />
                <button onClick={increment2} className="button-indes">
                  +
                </button>
              </div>
              <p>S/ {4.0 * count2}</p>
              <button className="pagar-buttom">Eliminar</button>
            </div>
          </div>

          <div className="total-pagar">
            <p className="total-pagar-text">Totales del carrito</p>
            <div className="subtotal-pagar">
              <div className="info-pagar">
                <p>Subtotal :</p>
                <p className="info-pagar-text">S/ 23.00</p>
              </div>
              <div className="info-pagar">
                <p>Envio :</p>
                <p className="info-pagar-text">
                  Deacuerdo a <br></br>donde se entrega
                </p>
              </div>
            </div>
            <div className="pagar-total">
              <p>Total</p>
              <p>S/23.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
