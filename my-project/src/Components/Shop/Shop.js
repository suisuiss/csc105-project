import React, { useState } from "react";
import "./shop.css";
import bell from "./bell.png";
import shopcart from "./shop cart.png";
import setting from "./setting.png";
import user from "./user.png";
import { Product } from "../Product/Product";

const notifications = [
  {
    image:
      "https://dj7u9rvtp3yka.cloudfront.net/products/PIM-1546095976599-a1785a3b-a36a-491d-afe9-ad631d366262_v1-small.jpg",
    description: "Menclothes Sale of 50% (April Deal)",
  },
  {
    image:
      "https://www.haglofs.com/dw/image/v2/BBTN_PRD/on/demandware.static/-/Sites-master-catalog-haglofs/default/dw2674d8dc/hi-res/6043062C5_S20_2_grey.jpg?sw=350&sh=350&sm=fit",
    description: "Accessories Sale of 10% (April Deal)",
  },
  {
    image:
      "https://static.zara.net/photos///2020/I/1/1/p/1202/610/050/2/w/1920/1202610050_1_1_1.jpg?ts=1597059771480",
    description: "Louboutin Buy 1 get 1 Free! (April Deal)",
  },
];

const NotificationContainer = () => {
  return (
    <div className="notification">
      {notifications.map((n, index) => NotificationItem(n, index))}
    </div>
  );
};

const NotificationItem = ({ image, description }, index) => {
  return (
    <div
      key={index}
      id={index}
      style={{
        display: "flex",
        borderBottom: "1px solid black",
        padding: "10px 0",
      }}
    >
      <img style={{ width: "1.5rem", height: "1.5rem" }} src={image} />
      <span
        style={{
          fontSize: "13px",
          alignSelf: "center",
          margin: "0 10px",
          display: "inline-block",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {description}
      </span>
    </div>
  );
};

const Shop = () => {
  const [isShowNotification, setIsShowNotification] = useState(false);
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
              <img
                src={bell}
                style={{ cursor: "pointer" }}
                alt="Notifications"
                name="bell"
                onClick={() => setIsShowNotification(!isShowNotification)}
              />
              {isShowNotification ? <NotificationContainer /> : <div></div>}
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