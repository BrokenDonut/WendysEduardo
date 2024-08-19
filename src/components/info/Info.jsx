import './Info.css'
import Fondo1 from './fondo2.avif'

export const Info = () => {
  return (
    <>
      <div className="fondo" id="nosotros">
        <div className="fondo-text">
          <h1>Nosotros</h1>
          <h3>desde 2021</h3>
          <p>
            Especializada en la entrega de verduras frescas y de alta calidad a
            restaurantes y tiendas. La empresa se destaca por su compromiso con
            la calidad y la satisfacción del cliente, ofreciendo una amplia
            variedad de productos agrícolas, desde verduras comunes hasta
            opciones más exóticas.
          </p>
          <p>
            Con una red de proveedores confiable y un sistema de logística
            eficiente, Wendy's y Eduardo garantiza que sus clientes reciban
            productos en óptimas condiciones. Mirando hacia el futuro, la
            empresa planea expandir su oferta y su alcance geográfico para
            convertirse en líder en el mercado de distribución de verduras.
          </p>
        </div>
        <img src={Fondo1} className="app-fondo" alt="fondo"></img>
      </div>
    </>
  );
};
