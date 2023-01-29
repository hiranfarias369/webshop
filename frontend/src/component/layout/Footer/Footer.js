//import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

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
        <h1>ECOMMERCE.</h1>
        <p>
          Construa seu site com quem entende, a alta qualidade é nossa prioridade{" "}
        </p>

        <p>Copyright 2023 Farias&Santos &copy; Todos os Direitos Reservados</p>
      </div>

      <div className="rightFooter">
        <h4>Siga-nos</h4>
        <a href="https://github.com/hiranfarias369">Instagram</a>
        <a href="https://github.com/hiranfarias369">Youtube</a>
        <a href="https://github.com/hiranfarias369">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
