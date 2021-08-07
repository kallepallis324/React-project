import React from "react";
import Header from "./Header";
import classes from "./OrderPlaced.module.css";

function OrderPlaced() {
  return (
    <div>
      <Header count={localStorage.getItem("cartCount")} />
      <div className={classes.orderConfirm}>
        <img src="https://i.imgur.com/Q9C8ExU.png" alt="" />
        <h3>Order Placed Successfully!!</h3>
        <p>We have sent you an email with the order details</p>
      </div>
    </div>
  );
}
export default OrderPlaced;
