import React from "react";
import "./MenClothes.css";
import menclothes from "../../../Menclothes.json";

const MenclothesItem = ({ id, image, price, description }) => {
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

export const Menclothes = () => {
  return (
    <div>
      <h1 id="menclothes">Men Clothes</h1>
      {menclothes.map((a) => MenclothesItem(a))}
    </div>
  );
}
