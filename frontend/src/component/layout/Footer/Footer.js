import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

import { FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer id="footer">
 
      <div className="leftFooter">
        <h4>Aplicativos para Celulares</h4>
        <p>Baixe nosso App para telefones Android e iOS</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Diy Hellem Confecções.</h1>
        <p>
          Construa seu site com quem entende. <br />A alta qualidade é nossa
          prioridade
        </p>

        <p>
          Copyright Farias & Santos 2023 &copy; Todos os Direitos Reservados
        </p>
      </div>

      <div className="rightFooter">
        <h4>Siga-nos</h4>
        <a href="https://www.instagram.com/diyhellem/">
          {" "}
          <FaInstagram />{" "}
        </a>
        <a href="https://www.facebook.com/Diy-Hellem-Confec%C3%A7%C3%B5es-102838436058751">
          {" "}
          <ImFacebook2 />{" "}
        </a>
        <a href="https://github.com/hiranfarias369">
          {" "}
          <FaTwitterSquare />{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
