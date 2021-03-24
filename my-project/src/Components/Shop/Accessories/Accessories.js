import React from "react";
import "./Accessories.css";
import accessories from "../../../accessories.json";

const AccessorieItem = ({ id, image, price, description }) => {
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

export const Accessories = () => {
  return (
    <div>
      <h1 id="accessories">Accessories</h1>
      {accessories.map((a) => AccessorieItem(a))}
    </div>
  );
}