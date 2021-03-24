import React from "react";
import "./Snacks.css";
import snacks from "../../../Snack.json";

const SnacksItem = ({ id, image, price, description }) => {
  return (
    <div key={id} id={id} className="snack-page-item">
      <img src={image}></img>
      <div className="snack-page-item-detail">
        <h1>{price} Baht</h1>
        <pre>{description}</pre>
        <a href={`/details/${id}`} id={id}>
          see more details
        </a>
      </div>
      <div className="snack-page-button-container">
        <div className="wrap-snack-page-button-container">
          <button>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export const Snacks = () => {
  return (
    <div style={{ width: "85%", margin: "auto" }}>
      <h1 id="snacks">Snacks</h1>
      {snacks.map((a) => SnacksItem(a))}
    </div>
  );
};