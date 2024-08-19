import { ModuloProducto } from '../moduloProducto/ModuloProducto';
import Aromatica1 from './aromatica/Huacatay.jpg'
import Aromatica2 from './aromatica/Oregano.jpg'
import Aromatica3 from './aromatica/albahaca-morada.jpg'
import Aromatica4 from './aromatica/albahaca.jpg'
import Aromatica5 from './aromatica/chives.webp'
import Aromatica6 from './aromatica/culantro.png'
import Aromatica7 from './aromatica/dill.jpg'
import Aromatica8 from './aromatica/estragon.jpg'
import Aromatica9 from './aromatica/hierba-buena.webp'
import Aromatica10 from './aromatica/hierba-luisa.png'
import Aromatica11 from './aromatica/hinojo.jpg'
import Aromatica12 from './aromatica/manzanilla.avif'
import Aromatica13 from './aromatica/menta-muna.jpg'
import Aromatica14 from './aromatica/menta.jpg'
import Aromatica15 from './aromatica/perejil-crespo.jpg'
import Aromatica16 from './aromatica/perejil.jpg'
import Aromatica17 from './aromatica/romero.jpg'
import Aromatica18 from './aromatica/salvia.jpg'
import Aromatica19 from './aromatica/tomillo.jpg'
import './Aromatica.css'

export const Aromatica = ()=>{
    return(
        <div className='container-aromatica'>
            <ModuloProducto imagen={Aromatica1} nombre="Huacatay" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica2} nombre="Oregano" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica3} nombre="Albahaca Morada" precio="5.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica4} nombre="Albahaca" precio="4.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica5} nombre="Chives" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica6} nombre="Culantro" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica7} nombre="Dill" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica8} nombre="Estragon" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica9} nombre="Hierba Buena" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica10} nombre="Hierba Luisa" precio="4.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica11} nombre="Hinojo" precio="2.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica12} nombre="Manzanilla" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica13} nombre="Menta Muña" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica14} nombre="Menta" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica15} nombre="Perejil Crespo" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica16} nombre="Perejil" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica17} nombre="Romero" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica18} nombre="Salvia" precio="3.00" ></ModuloProducto>
            <ModuloProducto imagen={Aromatica19} nombre="Tomillo" precio="3.00" ></ModuloProducto>
        </div>
    );
}