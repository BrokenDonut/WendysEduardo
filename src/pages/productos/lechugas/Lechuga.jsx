import { ModuloProducto } from '../moduloProducto/ModuloProducto';
import Lechuga1 from './lechugas/lechuga-americana.png';
import Lechuga2 from './lechugas/lechuga-frisee.jpg';
import Lechuga3 from './lechugas/lechuga-morada.png';
import Lechuga4 from './lechugas/lechuga-organica.jpg';
import Lechuga5 from './lechugas/lechuga-radichio.jpg';
import Lechuga6 from './lechugas/lechuga-romana.webp';
import Lechuga7 from './lechugas/lechuga-seda.jpeg';
import Lechuga8 from './lechugas/lechugas-mixta.jpeg';
import './Lechuga.css'

export const Lechugas = () => {
  return (
    <div className='container-lechuga'>
      <ModuloProducto imagen={Lechuga1} nombre="Americana" precio="3.00" ></ModuloProducto>
      <ModuloProducto imagen={Lechuga2} nombre="Frisee" precio="2.00"></ModuloProducto>
      <ModuloProducto imagen={Lechuga3} nombre="Morada" precio="1.50"></ModuloProducto>
      <ModuloProducto imagen={Lechuga4} nombre="Organica" precio="1.50"></ModuloProducto>
      <ModuloProducto imagen={Lechuga5} nombre="Radichio" precio="5.00"></ModuloProducto>
      <ModuloProducto imagen={Lechuga6} nombre="Romana" precio="1.50"></ModuloProducto>
      <ModuloProducto imagen={Lechuga7} nombre="Seda" precio="1.50"></ModuloProducto>
      <ModuloProducto imagen={Lechuga8} nombre="Mixta" precio="6.00"></ModuloProducto>
    </div>
  );
};
