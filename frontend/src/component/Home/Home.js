import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Products.js";
import MetaData from "../layout/MetaData";

const product = {
  name: "Blusa vikings masculina - Ragnar",
  images: [
    {
      url: "https://img.elo7.com.br/product/zoom/2154614/camiseta-vikings-masculina-ragnar-camisa-blusa-frases.jpg",
    },
  ],
  price: "RS 30.00",
  _id: "Hiran Farias",
};

const Home = () => {
  return (
    <Fragment>

      <MetaData title="WEBSHOP" />
      <div className="banner">
        <p>Bem-vindo a Diy Hellem Confecções.</p>
        <h1> ENCONTRE PRODUTOS INCRÍVEIS</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>

      </div>



      <h2 className="homeHeading">Produtos Em Destaque</h2>

      <div className="container" id="cotainer">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
