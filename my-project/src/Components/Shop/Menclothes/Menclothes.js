import React from "react";
import "./MenClothes.css";
import menclothes from "../../../Menclothes.json";


const MenclothesItem = ({ item, setToCart }) => {
  const { name, id, image, price, description } = item;
  return (
    <div key={id} id={id} className="men-clothes-page-item">
      <img src={image} alt={name}></img>
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
        <a href={`/details/menclothes/${id}`} id={id}>
          see more details
        </a>
      </div>
      <div className="men-clothes-page-button-container">
        <div className="wrap-men-clothes-page-button-container">
          <button onClick={() => setToCart(item)}>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};


export const Menclothes = (props) => {
  const { search, setToCart } = props;
  
  return (
    <div className="product-container">
      <h1 id="menclothes">Men Clothes</h1>
      {menclothes
     .filter((a) =>
     a.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
   )
      .map((a) => (
        <MenclothesItem item={a} setToCart={setToCart} />
      ))}
    </div>
    
  );
};
