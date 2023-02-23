import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Preço: ${item.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}`}</span>

        <p onClick={() => deleteCartItems(item.product)} aria-hidden="true">
          Remover
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
