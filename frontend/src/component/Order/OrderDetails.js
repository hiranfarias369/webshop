import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const OrderDetails = ({ match }) => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <Fragment>
      2222222222222222222222222222222222
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          2222222222222222222222222222222222
          <MetaData title="Detalhes do Pedido -- Diy Hellem Confecções." />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Pedido Nº: {order && order._id}
              </Typography>
              <Typography>Endereço Para Entrega</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Nome:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Telefone Celular:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Endereço:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>Pagamento</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "Confirmado"
                      : "Pendente"}
                  </p>
                </div>

                <div>
                  <p>Valor da Compra:</p>
                  <span>
                    {(order.totalPrice && order.totalPrice).toLocaleString(
                      "pt-br",
                      { style: "currency", currency: "BRL" }
                    )}
                  </span>
                </div>
              </div>

              <Typography>Status do Pedido</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Entregue"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Items do Pedido:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
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
                          {(item.price * item.quantity).toLocaleString(
                            "pt-br",
                            { style: "currency", currency: "BRL" }
                          )}
                        </b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;
