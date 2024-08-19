import { ModuloProducto } from "../moduloProducto/ModuloProducto";
import verduras1 from './verduras/brocoli.jpg'
import verduras2 from './verduras/choclito.webp'
import verduras3 from './verduras/pepino.jpg'
import verduras4 from './verduras/rabanito.png'
import verduras5 from './verduras/tomate-cherry.jpg'
import verduras6 from './verduras/vainita_bebe.png'
import verduras7 from './verduras/zanahoria-bebe.jpg'
import './Verduras.css'

export const Verduras =()=>{
    return(
        <div className="container-verduras">
            <ModuloProducto imagen={verduras1} nombre="Brocoli" precio="6.50" ></ModuloProducto>
            <ModuloProducto imagen={verduras2} nombre="Cholcito BB" precio="5.00" ></ModuloProducto>
            <ModuloProducto imagen={verduras3} nombre="Pepinillo" precio="2.50" ></ModuloProducto>
            <ModuloProducto imagen={verduras4} nombre="Rabanito" precio="4.00" ></ModuloProducto>
            <ModuloProducto imagen={verduras5} nombre="Tomate cherry" precio="15.00" ></ModuloProducto>
            <ModuloProducto imagen={verduras6} nombre="Vainita BB" precio="15.00" ></ModuloProducto>
            <ModuloProducto imagen={verduras7} nombre="Zanahoria BB" precio="4.00" ></ModuloProducto>
        </div>
    );
}