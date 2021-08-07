import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import Loader from "./Loader";

class Details extends Component {
  state = {
    ProductData: [],
    loadingSatus: true,
    currentImagePos: 0,
    imageUrl: "",
    cartCount: localStorage.getItem("cartCount")
  };

  onImageClick = pos => {
    this.setState({
      imageUrl: this.state.ProductData.photos[pos],
      currentImagePos: pos
    });
  };

  addDataIntoList = productData => {
    var myCartData;
    // If Local Storage Is Empty Then Set List To Empty
    if (window.localStorage.getItem("product-list") === null) {
      myCartData = [];
    }
    // If Local Storage Is Not Empty Then Set List To Value Of Local Storage
    else {
      myCartData = JSON.parse(window.localStorage.getItem("product-list"));
    }

    // If List Is Empty Then Push The Object In It
    if (myCartData.length === 0) {
      var myObj = {
        id: productData.id,
        title: productData.name,
        count: 1,
        price: productData.price,
        preview: productData.preview
      };
      myCartData.push(myObj);
    }
    // If List Is Not Empty Then
    else if (myCartData.length !== 0) {
      var w = 0;
      // If Same Product Data == True Then List.Count++
      for (var i = 0; i < myCartData.length; i++) {
        if (myCartData[i].id === productData.id) {
          myCartData[i].count = parseInt(myCartData[i].count) + 1;
          w += 1;
        }
      }
      // Else Add New Data Into List
      if (w === 0) {
        myObj = {
          id: productData.id,
          title: productData.name,
          count: 1,
          price: productData.price,
          preview: productData.preview
        };
        myCartData.push(myObj);
      }
    }
    // Store The List Into Local Storage
    window.localStorage.setItem("product-list", JSON.stringify(myCartData));
  };

  addToCart = productData => {
    let cartvalue = parseInt(localStorage.getItem("cartCount"));
    cartvalue = cartvalue + 1;
    localStorage.setItem("cartCount", cartvalue);
    this.setState({ cartCount: cartvalue });
    this.addDataIntoList(productData);
  };

  componentDidMount() {
    const productId = this.props.match.params.productId;
    axios
      .get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`)
      .then(response => {
        this.setState({
          ProductData: response.data,
          loadingSatus: false,
          imageUrl: response.data.photos[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Header count={localStorage.getItem("cartCount")} />
        {this.state.loadingSatus ? (
          <Loader />
        ) : (
          <ProductDetails
            preview={this.state.ProductData.preview}
            id={this.state.ProductData.id}
            previewImg={this.state.imageUrl}
            name={this.state.ProductData.name}
            brand={this.state.ProductData.brand}
            price={this.state.ProductData.price}
            description={this.state.ProductData.description}
            photos={this.state.ProductData.photos}
            imgOnClick={this.onImageClick}
            currentImage={this.state.currentImagePos}
            addToCart={this.addToCart}
          />
        )}
      </div>
    );
  }
}

export default Details;