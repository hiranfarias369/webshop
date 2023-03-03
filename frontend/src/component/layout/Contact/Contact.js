import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

import { FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:hiranfarias@gmail.com">
        <Button>hiranfarias@gmail.com</Button>
      </a>

      <div className="rightFooters">
        <h4>Siga-nos</h4>
        <a href="https://web.whatsapp.com/send?phone=+5582999489134" target="_blank" rel="noopener noreferrer">{""}
          <WhatsAppIcon />{" "}
        </a>

        <a href="https://www.instagram.com/diyhellem/" target="_blank" rel="noopener noreferrer">
          {" "}
          <FaInstagram />{" "}
        </a>
        <a href="https://www.facebook.com/Diy-Hellem-Confec%C3%A7%C3%B5es-102838436058751" target="_blank" rel="noopener noreferrer">
          {" "}
          <ImFacebook2 />{" "}
        </a>
        <a href="https://github.com/hiranfarias369" target="_blank" rel="noopener noreferrer">
          {" "}
          <FaTwitterSquare />{" "}
        </a>
      </div>
    </div>
  );
};

export default Contact;
