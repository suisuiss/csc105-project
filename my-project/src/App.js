import React, { Component} from "react";
import LogIn from "./Components/LogIn/LogIn";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";
import { Route } from "react-router-dom";
import Details from "./Components/Details/Details";


import Cart from "./Components/Cart/Cart";
import AddProduct from "./Components/AddProduct/AddProduct";
import EditInfo from "./Update/EditInfo";
import MyInfo  from "./Components/MyInfo/MyInfo";
import History  from "./Components/History/History";
import MyProduct  from "./Components/MyProduct/MyProduct";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
    this.setToCart = this.setToCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }
  

  setToCart({ productId, productPics, productPrice, productDescription }) {
    var buyerId = localStorage.getItem('userId');
    this.setState({
      cart: [...this.state.cart, { productId, productPics, productPrice, productDescription, buyerId }],
    });
    const allEntries = JSON.parse(localStorage.getItem("cart")) || [];
    allEntries.push({ productId, productPics, productPrice, productDescription, buyerId });
    localStorage.setItem("cart", JSON.stringify(allEntries));
  }

  DeleteProduct(productId){
    var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({productID:productId});
      console.log(raw);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("/csc105_backend_war_exploded/product/delete",requestOptions)
      .then(response => response.json())
    .then(result => (result)?window.location.assign("/myProduct"):console.log(result))
    .catch(error => console.log('error', error));
  }

  clearCart(cart) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify(cart);
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("/csc105_backend_war_exploded/product/transaction",requestOptions)
      .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    localStorage.removeItem("cart");
    window.location.assign("/shop/product");
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/addproduct" component={AddProduct} />
        <Route exact path="/editInfo" component={EditInfo}/>
        <Route exact path="/myInfo" component={MyInfo}/>
        <Route exact path="/history" component={History}/>
        <Route path="/myProduct" render={(props) => <MyProduct cart={cart} DeleteProduct={this.DeleteProduct} />}/>        

        
        <Route
          path="/shop/:category"
          render={(props) => <Shop cart={cart} setToCart={this.setToCart} />}
        />
        <Route path="/details/:category/:id" component={Details} />
        <Route path="/signup" component={SignUp} />
       
        <Route
          path="/cart"
          render={(props) => <Cart cart={cart} clearCart={this.clearCart} />}
        />
      </div>
    );
  }
}

export default App;