import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import HomePage from "./Components/HomePage";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import OrderPlaced from "./Components/OrderPlaced";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/order-placed" component={OrderPlaced} />
            <Route path="/checkout" component={Cart} />
            <Route path="/product/:productId" component={Details} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;