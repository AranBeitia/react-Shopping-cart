import React, { Component } from "react";

import Home from "./pages/Home";

import * as api from "./api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cartItems: [],
      isLoading: false,
      hasError: false,
      loadingError: null,
    };
  }

  componentDidMount() {
    const lastState = JSON.parse(localStorage.getItem("app-state"))

    if(!lastState) {
      this.setState({
        isLoading: true
      })

      api.getProducts().then((data) => {
        this.setState({
          products: data,
          isLoading: false,
        })
      })
      return
    }

    this.setState({
      products: lastState.products,
      cartItems:lastState.cartItems
    })
  }

  componentDidUpdate () {
    const { products, cartItems } = this.state
    localStorage.setItem("app-state", JSON.stringify({products,cartItems }))
  }

  // handleAddToCart(productId) {}

  // handleChange(event, productId) {}

  // handleRemove(productId) {}

  // handleDownVote(productId) {}

  // handleUpVote(productId) {}

  // handleSetFavorite(productId) {}

  render() {
    const {
      cartItems,
      products,
      isLoading,
      hasError,
      loadingError,
    } = this.state;

    return (
      <Home
        cartItems={cartItems}
        products={products}
        isLoading={isLoading}
        hasError={hasError}
        loadingError={loadingError}
        handleDownVote={() => {}}
        handleUpVote={() => {}}
        handleSetFavorite={() => {}}
        handleAddToCart={() => {}}
        handleRemove={() => {}}
        handleChange={() => {}}
      />
    );
  }
}

export default App;
