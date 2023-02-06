import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
   
    }
  };

  return (
    <Fragment>
      <MetaData title="PESQUISAR -- Diy Hellem Confecções." />
      <form className="searchBox" onSubmit={searchSubmitHandler}>

        <input
          type="text"
          placeholder="Pesquisar produto(s) ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Pesquisar" />
      </form>
    </Fragment>
  );
};

export default Search;