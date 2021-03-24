import React, { Component, useState } from "react";
import LogIn from "./Components/LogIn/LogIn";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";
import { Route } from "react-router-dom";
import { Menclothes } from "./Components/Shop/Menclothes/Menclothes";
import { WomenClothes } from "./Components/Shop/WomenClothes/WomenClothes";
import { Accessories } from "./Components/Shop/Accessories/Accessories";
import { Gadgets } from "./Components/Shop/Gadgets/Gadgets";
import { Snacks } from "./Components/Shop/Snacks/Snacks";
import Details from "./Components/Details/Details";
import Setting from "./Components/Setting/Setting";
import Cart from "./Components/Cart/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
    this.setToCart = this.setToCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  setToCart({ id, image, price, description }) {
    this.setState({
      cart: [...this.state.cart, { id, image, price, description }],
    });
    const allEntries = JSON.parse(localStorage.getItem("cart")) || [];
    allEntries.push({ id, image, price, description });
    localStorage.setItem("cart", JSON.stringify(allEntries));
  }

  clearCart() {
    localStorage.removeItem("cart");
    window.location.assign("/shop");
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <Route exact path="/" component={LogIn} />
        <Route
          path="/shop"
          render={(props) => <Shop cart={cart} setToCart={this.setToCart} />}
        />
        <Route path="/details/:id" component={Details} />
        <Route path="/signup" component={SignUp} />
        <Route path="/menclothes" component={Menclothes} />
        <Route path="/womenclothes" component={WomenClothes} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/gadgets" component={Gadgets} />
        <Route path="/snacks" component={Snacks} />
        <Route path="/setting" component={Setting} />
        <Route
          path="/cart"
          render={(props) => <Cart cart={cart} clearCart={this.clearCart} />}
        />
      </div>
    );
  }
}

export default App;