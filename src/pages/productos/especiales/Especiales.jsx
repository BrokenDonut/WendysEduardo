import { ModuloProducto } from "../moduloProducto/ModuloProducto";
import Especiales1 from './especiales/exotica-mix.png'
import Especiales2 from './especiales/flores_comestibles.jpg'
import Especiales3 from './especiales/hojas-limon.jpg'
import './Especiales.css'

export const Especiales =()=>{
    return(
        <div className="container-especiales">
            <ModuloProducto imagen={Especiales1} nombre="Exotica" precio="4.00" ></ModuloProducto>
            <ModuloProducto imagen={Especiales2} nombre="Flores" precio="7.00" ></ModuloProducto>
            <ModuloProducto imagen={Especiales3} nombre="Hojas de limos" precio="5.00" ></ModuloProducto>
        </div>
    );
}