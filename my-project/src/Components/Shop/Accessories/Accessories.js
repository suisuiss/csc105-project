import React from "react";
import "./Accessories.css";
import accessories from "../../../accessories.json";

const AccessorieItem = ({ id, image, price, description }) => {
  return (
    <div key={id} id={id} className="accessories-page-item">
      <img src={image}></img>
      <div className="accessories-page-item-detail">
        <h1>{price} Baht</h1>
        <pre>{description}</pre>
        <a href={`/details/${id}`} id={id}>
          see more details
        </a>
      </div>
      <div className="accessories-page-button-container">
        <div className="wrap-accessories-page-button-container">
          <button>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export const Accessories = () => {
  return (
    <div style={{ width: "85%", margin: "auto" }}>
      <h1 id="accessories">Accessories</h1>
      {accessories.map((a) => AccessorieItem(a))}
    </div>
  );
};