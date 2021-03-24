import React from "react";
import "./Gadgets.css";
import gadgets from "../../../Gadgets.json";

const GadgetsItem = ({ id, image, price, description }) => {
  return (
    <div key={id} id={id} className="gadget-page-item">
      <img src={image}></img>
      <div className="gadget-page-item-detail">
        <h1>{price} Baht</h1>
        <pre>{description}</pre>
        <a href={`/details/${id}`} id={id}>
          see more details
        </a>
      </div>
      <div className="gadget-page-button-container">
        <div className="wrap-gadget-page-button-container">
          <button>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export const Gadgets = () => {
  return (
    <div style={{ width: "85%", margin: "auto" }}>
      <h1 id="gadgets">Gadgets</h1>
      {gadgets.map((a) => GadgetsItem(a))}
    </div>
  );
};
