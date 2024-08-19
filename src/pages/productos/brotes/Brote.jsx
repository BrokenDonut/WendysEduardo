import { ModuloProducto } from "../moduloProducto/ModuloProducto";
import Brote1 from './brote/brote-alfalfa.jpg'
import Brote2 from './brote/brote-beterraga.jpg'
import Brote3 from './brote/brote-brocoli.jpg'
import Brote4 from './brote/brote-cilantro.webp'
import Brote5 from './brote/brote-quinua.jpg'
import Brote6 from './brote/micromix.jpg'
import './Brote.css'

export const Brote =()=>{
    return(
        <div className="container-brote">
            <ModuloProducto imagen={Brote1} nombre="Alfalfa" precio="7.00" ></ModuloProducto>
            <ModuloProducto imagen={Brote2} nombre="Beterraga" precio="8.00" ></ModuloProducto>
            <ModuloProducto imagen={Brote3} nombre="Brocoli" precio="7.00" ></ModuloProducto>
            <ModuloProducto imagen={Brote4} nombre="Cilantro" precio="7.50" ></ModuloProducto>
            <ModuloProducto imagen={Brote5} nombre="Quinua" precio="9.00" ></ModuloProducto>
            <ModuloProducto imagen={Brote6} nombre="Micromix" precio="7.50" ></ModuloProducto>
        </div>
    );
}