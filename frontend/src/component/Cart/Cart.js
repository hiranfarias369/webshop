import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard.js";
//import { useSelector, useDispatch } from "react-redux";
//import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
//import { Typography } from "@material-ui/core";
//import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
//import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Fragment>
      <div className="cartPage">
        <div className="cartHeader">
          <p>Produto</p>
          <p>Quantidade</p>
          <p>Subtotal</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
