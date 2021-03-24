import React from "react";
import "./shop.css";
import bell from "./bell.png";
import shopcart from "./shop cart.png";
import setting from "./setting.png";
import user from "./user.png";
import { Product } from "../Product/Product";

const Shop = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h1>Daily Deal</h1>
          <p>your best shopping centre</p>
        </div>
        <div style={{ flex: "1", display: "flex", flexDirection: "row" }}>
          <div className="search">
            <input type="search" placeholder="What do you want to get?" />
          </div>
          <div className="button-container">
            <a href=".html">
              <img src={shopcart} alt="Shop Cart" name="cart" />
            </a>
            <div className="bell-container">
              <a href="">
                <img src={bell} alt="Notifications" name="bell" />
              </a>
            </div>
            <a href=".html">
              <img src={setting} alt="Setting" name="setting" />
            </a>
            <a href=".html">
              <img src={user} alt="User" name="user" />
            </a>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="categories">
          <h2>Your Options</h2>
          <div className="cat-list">
            <a className="" href="./Menclothes/Menclothes.js">
              Men Clothes
            </a>
            <a className="" href="./WomenClothes/WomenClothes.js">
              Women Clothes
            </a>
            <a className="" href="./Accessories/Accessories.js">
              Accessories
            </a>
            <a className="" href="./Gadgets/Gadgets.js">
              Gadgets
            </a>
            <a className="" href="./Snacks/Snacks.js">
              Snack
            </a>
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Shop;
