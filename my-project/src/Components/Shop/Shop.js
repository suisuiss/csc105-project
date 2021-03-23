
import React from 'react';
import './shop.css';
import bell from './bell.png';
import shopcart from './shop cart.png';
import setting from './setting.png';
import user from './user.png';

const Shop= ()=> {
    return (
      <div>
      <div className="llogo">
        <a className="dailydeal" href="#logo">
          <h2>Daily Deal</h2>
          <p>your best shopping centre</p>
        </a>
      </div>
      <div className="search">
        <input type="search" placeholder="What you want to get?" />
      </div>
      <div className="option">
        <select name="category" id="category">
          <option value="option">choice</option>
          <optgroup label="Clothes">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </optgroup>
          <optgroup label="Food">
            <option value="dessert">Dessert</option>
            <option value="savory">Savory</option>
          </optgroup>
        </select>
      </div>
      <div className="ads">
      </div>
      <div className="news" />
      <a href=".html"><img src={shopcart} alt="Shop Cart" name="cart" /></a>
      <a href=".html"><img src={bell} alt="Notifications" name="bell" /></a>
      <a href=".html"><img src={setting} alt="Setting" name="setting" /></a>
      <a href=".html"><img src={user} alt="User" name="user" /></a>
    </div>
  );
  
}

export default Shop;