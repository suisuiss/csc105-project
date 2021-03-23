
import React from 'react';
import './shop.css';
import bell from './bell.png';
import shopcart from './shop cart.png';
import setting from './setting.png';
import user from './user.png';
import { Product } from '../Product/Product';


const Shop = () => {
  return (
    <div>
      <div className="llogo">
        <a className="dailydeal">
          <h2>Daily Deal</h2>
          <p>your best shopping centre</p>
        </a>
      </div>
      <div className="search">
        <input type="search" placeholder="What you want to get?" />
      </div>

      <div className="category">
        <h2>Your Option</h2>
        <a className="menClothes" href="">Men Clothes</a>
        <a className="womenClothes" href="">Women Clothes</a>
        <a className="accessories" href="">Accessories</a>
        <a className="electronic" href="">Electronic</a>
        <a className="snack" href="">Snack</a>



      </div>
      <div className="news" />
      <a href=".html"><img src={shopcart} alt="Shop Cart" name="cart" /></a>
      <a href=".html"><img src={bell} alt="Notifications" name="bell" /></a>
      <a href=".html"><img src={setting} alt="Setting" name="setting" /></a>
      <a href=".html"><img src={user} alt="User" name="user" /></a>
      
      
      <Product/>

    </div>

  );

}

export default Shop;