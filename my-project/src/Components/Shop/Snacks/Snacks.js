import React from "react";
import "./Snacks.css";
import snacks from "../../../Snack.json";

const SnacksItem = ({ id, image, price, description }) => {
  return (
    <div key={id} id={id}>
      <img src={image}></img>
      <h1>{price} Baht</h1>
      <p>{description}</p>
      <a href="" id={id}>
        see more details
      </a>
      <a href="" id={id}>
        Add To Shopping Cart
      </a>
    </div>
  );
};

export const Snacks= () => {
  return (
    <div>
      <h1 id="snacks">Accessories</h1>
      {snacks.map((a) => SnacksItem(a))}
    </div>
  );
}