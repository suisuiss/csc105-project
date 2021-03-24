import React from "react";
import { useParams } from "react-router-dom";
import products from "../../Products.json";


const Details = () => {
  const { id } = useParams();
  const selected = products.filter((p) => p.id == id)[0];

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
  const { name,id, image, price, description} = product;

  return (
    <div>
      <img src={image} />
      <span style={{ display: "block" }}>{name} </span>
      <span style={{ display: "block" }}>Price: {price} Baht</span>
      <p>Description: {description}</p>
      <span style={{ display: "block" }}>ID: {id}</span>
    </div>
  );
};

export default Details;