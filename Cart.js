import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import classes from "./Cart.module.css";

class Cart extends Component {
  state = {
    placeOrder: false,
    cartData: JSON.parse(localStorage.getItem("product-list")),
    cartCount: localStorage.getItem("cartCount")
  };
  render() {
    let myCartData = this.state.cartData;

    if (myCartData != null) {
      var itemGrid = myCartData.map((item, pos) => {
        return (
          <div className={classes.item} key={pos}>
            <img src={item.preview} alt="" />
            <div className={classes.detail}>
              <h3>{item.title}</h3>
              <p>x{item.count}</p>
              <p>Amount: {item.price * item.count}</p>
            </div>
          </div>
        );
      });
    } else {
      myCartData = [];
    }

    var cost = 0;
    for (let i = 0; i < myCartData.length; i++) {
      cost += parseInt(myCartData[i].count) * parseInt(myCartData[i].price);
    }

    const placeOrder = () => {
      console.log("Excuted");
      this.setState({
        cartData: [],
        cartCount: 0
      });
      localStorage.removeItem("product-list");
      localStorage.setItem("cartCount", "0");
    };

    return (
      <div>
        <Header count={this.state.cartCount} />

        <div className={classes.cart}>
          <h1>Checkout</h1>
          <div className={classes.cartContainer}>
            <div className={classes.leftSide}>
              <p>
                Total Items: <span>{myCartData.length}</span>
              </p>
              <div className={classes.cartItems}>{itemGrid}</div>
            </div>
            <div className={classes.rightSide}>
              <div className={classes.totalAmount}>
                <h2>Total Amount</h2>
                <p>
                  Total Amount: Rs <span>{cost}</span>
                </p>
                <Link to="/order-placed">
                  <button onClick={placeOrder}>Place Order</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
