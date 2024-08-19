import { ModuloProducto } from '../moduloProducto/ModuloProducto';
import Hojas1 from './hojas/Arugula.webp'
import Hojas2 from './hojas/acelga.webp'
import Hojas3 from './hojas/espinaca-bebe.png'
import Hojas4 from './hojas/kale.jpg'
import Hojas5 from './hojas/silvestre.jpg'
import './HojasVerdes.css'

export const HojasVerder =()=>{
    return(
        <div className='container-hojas'>
            <ModuloProducto imagen={Hojas1} nombre="Arugula" precio="4.00" ></ModuloProducto>
            <ModuloProducto imagen={Hojas2} nombre="Acelga" precio="5.50" ></ModuloProducto>
            <ModuloProducto imagen={Hojas3} nombre="Espinaca BB" precio="4.00" ></ModuloProducto>
            <ModuloProducto imagen={Hojas4} nombre="Kale" precio="4.00" ></ModuloProducto>
            <ModuloProducto imagen={Hojas5} nombre="Silvestre" precio="4.00" ></ModuloProducto>
        </div>
    );
}