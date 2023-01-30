//import React from "react";

import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

import {FaInstagram,FaTwitterSquare} from "react-icons/fa";
import {ImFacebook2} from "react-icons/im";


const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
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
        <a href="https://www.instagram.com/diyhellem/"> <FaInstagram /> </a>
        <a href="https://github.com/hiranfarias369"> <FaTwitterSquare /> </a>
        <a href="https://github.com/hiranfarias369"> <ImFacebook2 /> </a>
      </div>
    </footer>
  );
};

export default Footer;
