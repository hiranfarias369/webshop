import React, { Fragment } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  // const address = `${shippingInfo.address}, ${shippingInfo.number}, ${shippingInfo.complement} ,${shippingInfo.district},${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history.push("/process/payment");
  };

  return (
    <Fragment>
      bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
      <MetaData title="Confirmar Pedido" />
      <CheckoutSteps activeStep={1} />
    
      <div className="confirmOrderPage">
        
        <div>
          <div className="confirmshippingArea">
            <Typography>Endereço Para Entrega:</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Nome:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Telefone Celular:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>

              <div>
                <p>Endereço:</p>
                <span>{shippingInfo.address}</span>
              </div>

              <div>
                <p>Número:</p>
                <span>{shippingInfo.number}</span>
              </div>
              <div>
                <p>Complemento:</p>
                <span>{shippingInfo.complement}</span>
              </div>
              <div>
                <p>Bairro:</p>
                <span>{shippingInfo.district}</span>
              </div>
              <div>
                <p>Cidade:</p>
                <span>{shippingInfo.city}</span>
              </div>
              <div>
                <p>Estado:</p>
                <span>{shippingInfo.state}</span>
              </div>
              <div>
                <p>CEP:</p>
                <span>{shippingInfo.pinCode}</span>
              </div>
              <div>
                <p>País:</p>
                <span>{shippingInfo.country}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Produtos do Seu Carrinho:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X{" "}
                      {item.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}{" "}
                      ={" "}
                      <b>
                        {(item.price * item.quantity).toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Resumo do Pedido</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>
                  {subtotal.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div>
                <p>Frete:</p>
                <span>
                  {shippingCharges.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div>
                <p>GST:</p>
                <span>
                  {tax.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>
                {totalPrice.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>

            <button onClick={proceedToPayment}>Ir Para Pagamento</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
