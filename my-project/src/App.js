import React, { Component} from "react";
import LogIn from "./Components/LogIn/LogIn";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";
import { Route } from "react-router-dom";
import { MenClothesShop } from "./Components/Shop/Menclothes/MenClothesShop";
import { WomenClothesShop } from "./Components/Shop/WomenClothes/WomenClothesShop";
import { AccessoriesShop } from "./Components/Shop/Accessories/AccessoriesShop";
import { GadgetsShop } from "./Components/Shop/Gadgets/GadgetsShop";
import { SnacksShop } from "./Components/Shop/Snacks/SnacksShop";
import Details from "./Components/Details/Details";

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
        <Route path="/details/:category/:id" component={Details} />
        <Route path="/signup" component={SignUp} />
        <Route
          path="/menclothes"
          render={(props) => (
            <MenClothesShop cart={cart} setToCart={this.setToCart} />
          )}
        />
        <Route path="/womenclothes" render={(props) => (
          <WomenClothesShop cart={cart} setToCart={this.setToCart} />
        )} />
        <Route path="/accessories" render={(props) => (
          <AccessoriesShop cart={cart} setToCart={this.setToCart} />
        )} />
        <Route path="/gadgets" render={(props) => (
          <GadgetsShop cart={cart} setToCart={this.setToCart} />
        )} />
        <Route path="/snacks" render={(props) => (
          <SnacksShop cart={cart} setToCart={this.setToCart} />
        )} />
       
        <Route
          path="/cart"
          render={(props) => <Cart cart={cart} clearCart={this.clearCart} />}
        />
      </div>
    );
  }
}

export default App;