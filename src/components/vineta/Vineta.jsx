import './Vineta.css';
import { useNavigate } from 'react-router-dom';

export const Vineta = ({ img, name, info, url }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(url);
    };

    return (
        <div className="vineta">
            <img src={img} alt="category" className='vineta-img' />
            <h1 className="vineta-name">{name}</h1>
            <p className="vineta-info">{info}</p>
            <button type="button" className="vineta-buttom" onClick={handleClick}>
                Conocer más
            </button>
        </div>
    );
};
