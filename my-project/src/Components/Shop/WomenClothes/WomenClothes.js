import React from "react";
import "./WomenClothes.css";
import womenclothes from "../../../WomenClothes.json";

const WomenclothesItem = ({ item, setToCart }) => {
  const { name, id, image, price, description } = item;
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
          <button onClick={() => setToCart(item)}>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export const WomenClothes = (props) => {
  const { search, setToCart } = props;
  
  return (
    <div className="product-container">
    <h1 id="womenclothes">Women Clothes</h1>
    {womenclothes
   .filter((a) =>
   a.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
 )
    .map((a) => (
      <WomenclothesItem item={a} setToCart={setToCart} />
    ))}
  </div>
  );
};