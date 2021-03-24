import React from "react";
import "./MenClothes.css";
import menclothes from "../../../Menclothes.json";

const MenclothesItem = ({ name,id, image, price, description }) => {
  return (
    <div key={id} id={id} className="men-clothes-page-item">
      <img src={image}></img>
      <div className="men-clothes-page-item-detail">
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
        <a href={`/details/${id}`} id={id}>
          see more details
        </a>
      </div>
      <div className="men-clothes-page-button-container">
        <div className="wrap-men-clothes-page-button-container">
          <button>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export const Menclothes = () => {
  return (
    <div style={{ width: "85%", margin: "auto" }}>
      <h1 id="menclothes">Men Clothes</h1>
      {menclothes.map((a) => MenclothesItem(a))}
    </div>
  );
};