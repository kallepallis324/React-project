import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

class Header extends Component {
  render() {
    // Setting Cart Value
    let cartValue = localStorage.getItem("cartCount");
    if (cartValue == null) {
      localStorage.setItem("cartCount", "0");
      cartValue = localStorage.getItem("cartCount");
    } else {
      cartValue = localStorage.getItem("cartCount");
      localStorage.setItem("cartCount", cartValue);
    }
    return (
      <div className={classes.topBar}>
        <div className={classes.logo}>
          <h4>
            <span>SHOP</span>LANE
          </h4>
        </div>

        <ul className={classes.navLinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>Clothings</li>
          <li>Accessories</li>
        </ul>

        <div className={classes.icons}>
          <i className="fa fa-search"></i>
          <div className={classes.cart}>
            <Link to="/checkout">
              <i className="fa fa-shopping-cart">
                <span className="cartCount">{this.props.count}</span>
              </i>
            </Link>
          </div>
          <i className="fa fa-user-circle-o"></i>
          <div className={classes.burger}>
            <div className={classes.line1}></div>
            <div className={classes.line2}></div>
            <div className={classes.line3}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;