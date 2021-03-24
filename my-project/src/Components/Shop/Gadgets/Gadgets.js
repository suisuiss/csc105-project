import React from 'react'
import './Gadgets.css'
import gadgets from "../../../Gadgets.json";

const GadgetsItem = ({ id, image, price, description }) => {
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
  
  export const Gadgets = () => {
    return (
      <div>
        <h1 id="gadgets">Gadgets</h1>
        {gadgets.map((a) => GadgetsItem(a))}
      </div>
    );
  }