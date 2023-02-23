import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Pagamento Realizado com Sucesso!</Typography>
      <Link to="/orders">Visualizar Pedido</Link>
    </div>
  );
};

export default OrderSuccess;
