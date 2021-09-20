import React, { Component } from "react";

import Home from "./pages/Home";

import * as api from "./api";

function buildNewCart (cartItem) {
  if(cartItem.quantity >= cartItem.unitsInStock) {
    return cartItem
  }

  return {
    id: cartItem.id,
    title: cartItem.title,
    img: cartItem.img,
    price: cartItem.price,
    unitsInStock: cartItem.unitsInStock,
    createdAt: cartItem.createdAt,
    updatedAt: cardItem.updatedAt,
    quantity: cartItem.quantity + 1
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
    this.handleAddToCart = this.handleAddToCart.bind(this)
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

  handleAddToCart(productId) {
    const { products, cardItems } = this.state
    const prevCartItem = cardItems.find((item) => item.id === productId)
    const productFound = products.find((product) => product.id === productId)
    console.log(productFound);

    if(prevCartItem) {
      const updateCartItems = cartItems.map(item => {
        if(item.id !== productId) { return item }
        if(item.quantity >= item.unitsInStock) { return item }
        return { ...item, quantity: item.quantity + 1}
      })
      this.setState({ cartItems: updateCartItems })
      return
    }
    const updateProduct = buildNewCart(productFound)
    this.setState((prevState) => ({ cartItems: [...prevState.cartItems, updateProduct] }))
  }

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
        // handleDownVote={() => {}}
        // handleUpVote={() => {}}
        // handleSetFavorite={() => {}}
        handleAddToCart={this.handleAddToCart}
        // handleRemove={() => {}}
        // handleChange={() => {}}
      />
    );
  }
}

export default App;
