import React from "react";
import "./WomenClothes.css";
import womenclothes from "../../../WomenClothes.json";

const WomenclothesItem = ({ id, image, price, description }) => {
  return (
    <div key={id} id={id} className="women-clothes-page-item">
      <img src={image}></img>
      <div className="women-clothes-page-item-detail">
        <h1>{price} Baht</h1>
        <pre>{description}</pre>
        <a href={`/details/${id}`} id={id}>
          see more details
        </a>
      </div>
      <div className="women-clothes-page-button-container">
        <div className="wrap-women-clothes-page-button-container">
          <button>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export const WomenClothes = () => {
  return (
    <div style={{ width: "85%", margin: "auto" }}>
      <h1 id="womenclothes">Women Clothes</h1>
      {womenclothes.map((a) => WomenclothesItem(a))}
    </div>
  );
};