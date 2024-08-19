import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="footer-name">
        <p>Pagina Hecho por </p>
        <p className="name"> Ronaldo Chulluncuy</p>
      </div>
      <div style={{ display: "flex", gap: "10px" }} className="icon">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={30} />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={30} />
        </a>
      </div>
    </footer>
  );
};
