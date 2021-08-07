import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";
import Card from "./Card";
import Loader from "./Loader";
import "../App.css";

class HomePage extends Component {
  state = {
    cardList: [],
    loadingSatus: true
  };
  componentDidMount() {
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then(response => {
        console.log(response.data);
        this.setState({ cardList: response.data, loadingSatus: false });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const cardListData = this.state.cardList;

    const clothingGrid = cardListData.map(item => {
      return item.isAccessory ? null : (
        <Card
          key={item.id}
          id={item.id}
          preview={item.preview}
          title={item.name}
          brand={item.brand}
          price={item.price}
        />
      );
    });

    const accessoryGrid = cardListData.map(item => {
      return item.isAccessory ? (
        <Card
          key={item.id}
          id={item.id}
          preview={item.preview}
          title={item.name}
          brand={item.brand}
          price={item.price}
        />
      ) : null;
    });

    return (
      <div>
        <Header count={localStorage.getItem("cartCount")} />
        <h2 className="sectionHeading">Clothings for Men and Women</h2>
        <div className="cardConatiner">
          {this.state.loadingSatus ? <Loader /> : clothingGrid}
        </div>
        <h2 className="sectionHeading">Accessory for Men and Women</h2>
        <div className="cardConatiner">
          {this.state.loadingSatus ? <Loader /> : accessoryGrid}
        </div>
      </div>
    );
  }
}

export default HomePage;