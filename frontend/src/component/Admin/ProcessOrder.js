import React, { Fragment, useEffect, useState } from "react";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import SideBar from "./Sidebar";
import {
  getOrderDetails,
  clearErrors,
  updateOrder,
} from "../../actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Button } from "@material-ui/core";
import { UPDATE_ORDER_RESET } from "../../constants/orderConstants";
import "./processOrder.css";

const ProcessOrder = ({ history, match }) => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);
  const { error: updateError, isUpdated } = useSelector((state) => state.order);


  

  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("status", status);

    dispatch(updateOrder(match.params.id, myForm));
  };

  const dispatch = useDispatch();
  const alert = useAlert();

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
    if (isUpdated) {
      alert.success("Pedido Atualizado Com Sucesso!");
      dispatch({ type: UPDATE_ORDER_RESET });
    }

    dispatch(getOrderDetails(match.params.id));
  }, [
    dispatch,
    alert,
    error,
    match.params.id,
    history,
    isUpdated,
    updateError,
  ]);

  return (
    <Fragment>
      <MetaData title="Process Order" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <div
              className="confirmOrderPage"
              style={{
                display: order.orderStatus === "Pedido Entregue" ? "block" : "grid",
              }}
            >
              <div>
                <div className="confirmshippingArea">
                  <Typography>Endereço Para Entrega</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p>Nome:</p>
                      <span>
                        {order.shippingInfo && order.shippingInfo.name}
                      </span>
                    </div>
                    <div>
                      <p>Telefone</p>
                      <span>
                        {order.shippingInfo && order.shippingInfo.phoneNo}
                      </span>
                    </div>
                    <div>
                      <p>Endereço:</p>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.address}, ${order.shippingInfo.number}, ${order.shippingInfo.district},  ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                      </span>
                    </div>

                    <div>
                      <p>Ponto de Referência:</p>
                      <span>
                        {order.shippingInfo && order.shippingInfo.complement}
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
                            ? "blueColor"
                            : "redColor"
                        }
                      >
                        {order.paymentInfo &&
                        order.paymentInfo.status === "succeeded"
                          ? "PAGAMENTO CONFIRMADO"
                          : "PAGAMENTO PENDENTE"}
                      </p>
                    </div>

                    <div>
                      <p className={order ? "blueColor" : ""}>
                        Valor da Compra:
                      </p>
                      <span
                        className={
                          order.paymentInfo &&
                          order.paymentInfo.status === "succeeded"
                            ? "blueColor"
                            : "redColor"
                        }
                      >
                        {order.totalPrice &&
                          order.totalPrice.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                      </span>
                    </div>
                  </div>

                  <Typography>Situação do Pedido</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>

                      
                      <p 
                      
                          
                        className={order.orderStatus && order.orderStatus  === "Pedido Entregue" ? "blueColor" :  "redColor" != order.orderStatus && order.orderStatus  === "Pedido Enviado" ? "greenColor" :  "redColor"}>


                      

                        {order.orderStatus && order.orderStatus}




                      </p>
                    </div>
                  </div>
                </div>
                <div className="confirmCartItems">
                  <Typography>Itens do Carrinho :</Typography>
                  <div className="confirmCartItemsContainer">
                    {order.orderItems &&
                      order.orderItems.map((item) => (
                        <div key={item.product}>
                          <img src={item.image} alt="Product" />
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>{" "}
                          <span>
                            {item.quantity} X {item.price.toLocaleString("pt-BR" ,{style: "currency", currency: "BRL"})} ={" "}
                            <b>{(item.price * item.quantity).toLocaleString("pt-BR" ,{style: "currency", currency: "BRL"})}</b>
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/*  */}
              
              <div
                style={{
                  display: order.orderStatus === "Pedido Entregue" ? "none" : "block",
                }}
              >
                <form
                  className="updateOrderForm"
                  onSubmit={updateOrderSubmitHandler}
                >
                  <h1>Atualizar Pedido</h1>

                  <div>
                    <AccountTreeIcon />
                    <select onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Informe a Situação do Pedido:</option>
                      {order.orderStatus === "Processando Pedido..." && (
                        <option value="Pedido Enviado">Pedido Enviado</option>
                      )}

                      {order.orderStatus === "Pedido Enviado" && (
                        <option value="Pedido Entregue">Pedido Entregue</option>
                      )}
                    </select>
                  </div>

                  <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                      loading ? true : false || status === "" ? true : false
                    }
                  >
                    SALVAR
                  </Button>
                </form>
              </div>
              
            </div>
          )}
          
        </div>
        
      </div>
    </Fragment>
  );
};

export default ProcessOrder;
