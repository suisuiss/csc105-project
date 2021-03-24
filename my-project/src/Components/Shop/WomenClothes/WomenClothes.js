import React from "react";
import "./WomenClothes.css";
import  womenclothes from '../../../WomenClothes.json'

const WomenclothesItem = ({ id, image, price, description }) => {
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

export const WomenClothes = () => {
  return (
    <div>
      <h1 id="womenclothes">Women Clothes</h1>
      {womenclothes.map((a) => WomenclothesItem(a))}
    </div>
  );
}