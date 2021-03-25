import React from "react";
import "./WomenClothes.css";
import womenclothes from "../../../WomenClothes.json";

const WomenclothesItem = ({ name, id, image, price, description }) => {
  return (
    <div key={id} id={id} className="women-clothes-page-item">
      <img src={image} alt={name}></img>
      <div className="women-clothes-page-item-detail">
        <h2>
          {name}
          <span
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginLeft: "1rem",
            }}
          >
            {price} Baht
          </span>
        </h2>

        <pre>{description}</pre>
        <a href={`/details/womenclothes/${id}`} id={id}>
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