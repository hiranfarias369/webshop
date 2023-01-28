import React from 'react';
import {ReactNavbar} from "overlay-navbar"


import logo from "../../images/logo.png"



const options = {
  burgerColorHover: "#eb4034",
  logo,}

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;