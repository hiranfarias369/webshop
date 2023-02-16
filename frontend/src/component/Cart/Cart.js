import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard.js";
import { useSelector, useDispatch } from "react-redux";
//import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
//import { Typography } from "@material-ui/core";
//import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
//import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock)=> {
    const newQty = quantity + 1;

    if(stock <= quantity) {

      return;

    }

dispatch(addItemsToCart(id, newQty));

  };

  return (
    <Fragment>
      <div className="cartPage">
        <div className="cartHeader">
          <p>Produto</p>
          <p>Quantidade</p>
          <p>Subtotal</p>
        </div>

        {cartItems &&
          cartItems.map((item) => (
            <div className="cartContainer">
              <CartItemCard item={item} />

              <div className="cartInput">
                <button>-</button>
                <input type="number" value={item.quantity} readOnly />
                <button onClick={()=>increaseQuantity(item.product )} >+</button>
              </div>
              <p className="cartSubtotal">
                {" "}
                {`R$ ${item.price * item.quantity}`}
              </p>
            </div>
          ))}

        <div className="cartGrossProfit">
          <div />
          <div className="cartGrossProfitBox">
            <p>Total</p>

            <p>{"R$ 300"}</p>
          </div>

          <div />
          <div className="checkOutBtn">
            <button>Verificar</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
