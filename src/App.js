import React, { Component } from "react";

import Home from "./pages/Home";

import * as api from "./api";

const LOCAL_STORAGE_KEY = "react-sc-state";

function loadLocalStorageData() {
  const prevItems = localStorage.getItem(LOCAL_STORAGE_KEY)

  if(!prevItems) {
    return null
  }

  try {
    return JSON.parse(prevItems)
  } catch (error) {
    return null
  }
}

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
    const prevItems = loadLocalStorageData()

    if(!prevItems) {
      this.setState({
        isLoading: true,
      });
      api.getProducts().then((data) => {
        this.setState({
          products: data,
          isLoading: false,
        });
      });
      return;
    }

    this.setState({
      cartItems:prevItems.cartItems,
      products: prevItems.products
    })
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
