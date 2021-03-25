import React from "react";
import { useParams } from "react-router-dom";
import products from "../../Products.json";
import accessories from "../../accessories.json";
import gadgets from "../../Gadgets.json";
import menclothes from "../../Menclothes.json";
import snacks from "../../Snack.json";
import womenclothes from "../../WomenClothes.json";
import "./Details.css";

const Details = () => {
  const { category, id } = useParams();
  let selectedArray = [];
  switch (category) {
    case "products":
      selectedArray = products;
      break;
    case "accessories":
      selectedArray = accessories;
      break;
    case "gadgets":
      selectedArray = gadgets;
      break;
    case "menclothes":
      selectedArray = menclothes;
      break;
    case "snacks":
      selectedArray = snacks;
      break;
    case "womenclothes":
      selectedArray = womenclothes;
      break;
    default:
      break;
  }
  const selected = selectedArray.filter((p) => p.id === id)[0];

  return (
    <div>
      {selected !== undefined ? (
        <DetailsItem product={selected} />
      ) : (
        <div>Not Found</div>
      )}
    </div>
  );
};

const DetailsItem = ({ product }) => {
  const { name, id, image, price, description, details } = product;

  return (
    <div className="page-details-container">
      <img className="page-details-image" src={image} alt={name} />
      <div className="page-details-info">
        <span className="page-details-info-name" style={{ display: "block" }}>
          {name}{" "}
        </span>
        <span className="page-details-info-price" style={{ display: "block" }}>
          Price: {price} Baht
        </span>
        <span className="page-details-info-id" style={{ display: "block" }}>
          ID: {id}
        </span>
        <div style={{ marginTop: "1rem" }}>
          <label style={{ display: "block", fontSize: "14px" }}>
            Description
          </label>
          <p className="page-details-info-description">{description}</p>
        </div>
        <p className="page-details-info-details">{details}</p>
      </div>
    </div>
  );
};

export default Details;