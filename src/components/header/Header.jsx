import './Header.css'
import Img1 from './img1.jpeg'

export const Header = () => {
  return (
    <div className="m-img">
      <img src={Img1} className="img1" alt="Img1" />
      <div className="text-overlay">
        <div>
          <h1>Wendy'S &</h1>
          <h1>Eduardo</h1>
        </div>
        <h2>Una Empresa especialisada en el abastecimiento de </h2>
        <h2>productos frescos a restaurantes y tiendas</h2>
      </div>
    </div>
  );
};
