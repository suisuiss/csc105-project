import React, { useState } from "react";
import "./shop.css";
import bell from "./bell.png";
import shopcart from "./shop cart.png";

import user from "./user.png";
import { Product } from "../Product/Product";
import fire from "../../config/fire";

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
      <img
        style={{ width: "1.5rem", height: "1.5rem" }}
        alt={`shop-${index}`}
        src={image}
      />
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

const Shop = (props) => {
  const { cart, setToCart } = props;
  const [isShowNotification, setIsShowNotification] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [search, setSearch] = useState("");

  const logout = () => {
    fire
      .auth()
      .signOut()
      .then(function () {
        console.log("Logout!");
        window.location.assign("/");
      })
      .catch(function (err) {
        console.log(`Signout Error: ${err}`);
      });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <h1>Daily Deal</h1>
          <p>your best shopping centre</p>
        </div>
        <div style={{ flex: "1", display: "flex", flexDirection: "row" }}>
          <div className="search">
            <input
              type="search"
              placeholder="What do you want to get?"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="button-container">
            <div className="cart-container">
              <a href="/cart">
                <img src={shopcart} alt="Shop Cart" name="cart" />
              </a>
              {cart.length === 0 ? (
                <div></div>
              ) : (
                <div className="count-cart-item">{cart.length}</div>
              )}
            </div>
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
            
           
            <div className="user-container">
              <img
                src={user}
                style={{ cursor: "pointer" }}
                alt="Notifications"
                name="user"
                onClick={() => setIsOpenUser(!isOpenUser)}
              />
              {isOpenUser ? (
                <div className="user-modal">
                  <button onClick={logout}>Logout</button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="categories">
          <h2>Your Options</h2>
          <div className="cat-list">
            <a className="" href="./menclothes">
              Men Clothes
            </a>
            <a className="" href="./womenclothes">
              Women Clothes
            </a>
            <a className="" href="./accessories">
              Accessories
            </a>
            <a className="" href="./gadgets">
              Gadgets
            </a>
            <a className="" href="./snacks">
              Snack
            </a>
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <Product search={search} setToCart={setToCart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;