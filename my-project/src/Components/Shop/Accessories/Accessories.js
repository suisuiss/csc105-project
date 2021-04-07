import React from "react";
import "./Accessories.css";
import accessories from "../../../accessories.json";

const AccessoriesItem = ({ item, setToCart }) => {
  const { name, id, image, price, description } = item;
  return (
    <div key={id} id={id} className="accessories-page-item">
      <img src={image} alt={name}></img>
      <div className="accessories-page-item-detail">
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
        <a href={`/details/accessories/${id}`} id={id}>
          see more details
        </a>
      </div>
      <div className="accessories-page-button-container">
        <div className="wrap-accessories-page-button-container">
          <button onClick={() => setToCart(item)}>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export const Accessories = (props) => {
  const { search,setToCart } = props;
  return (
    <div className="product-container">
      <h1 id="accessories">Accessories</h1>
      {accessories
     .filter((a) =>
     a.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
   )
      .map((a) => (
        <AccessoriesItem item={a} setToCart={setToCart} />
      ))}
    </div>
  );
};