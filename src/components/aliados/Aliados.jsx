import BacoBaca from './baco-y-vaca.jpg'
import Kilo from './kilo.jpg'
import LaBon from './la-bonbonniere-larcomar.jpg'
import Linterna from './La_Linterna.webp'
import './Aliados.css'

export const Aliados = ()=>{
    return(
        <div className='container-aliados' id='aliados'>
            <h1>Nuestros Clientes</h1>
            <div className='img-aliados'>
                <img src={BacoBaca} alt='img'></img>
                <img src={Kilo} alt='img'></img>
                <img src={LaBon} alt='img'></img>
                <img src={Linterna} alt='img'></img>
            </div>
        </div>
    );
}