import React, { useState, useEffect } from "react";
import ImageUpload from "./AddImage";
import "./AddProduct.css";

export default () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [detail, setDetail] = useState("");
  const [description, setDescription] = useState("");
  const [imageDetail, setImageDetail] = useState();
  const [category, setCategory] = useState("menClothes");
  const [text, setText] = useState(false);
  const [errorMsgProduct, setErrorMsgProduct] = useState();
  const [errorMsgPrice, setErrorMsgPrice] = useState();
  const [errorMsgAmount, setErrorMsgAmount] = useState();
  const [errorMsgDetial, setErrorMsgDetail] = useState();
  const [errorMsgDescription, setErrorMsgDescription] = useState();
  const [errorMsgPic, setErrorMsgPic] = useState();
  const [errorMsgCategory, setErrorMsgCategory] = useState();

  function Add() {
    if (productName == "") {
      setErrorMsgProduct("Please input Product Name!");
    }
    if (price == "") {
      setErrorMsgPrice("Please input Price");
    } 
    if (amount == "") {
      setErrorMsgAmount("Please input Amount");
    }
    if (detail == "") {
      setErrorMsgDetail("Please input Detail");
    }
    if (description == "") {
      setErrorMsgDescription("Please input Description");
    }
    if (imageDetail == undefined) {
      setErrorMsgPic("Please upload Image");
    }
    if (category == "") {
      setErrorMsgCategory("Please select Category");
    }else{
      console.log("Complete!");
      console.log("Sending json data to api!");

    }
  }

  function onProductNameChange(e) {
    setProductName(e.target.value);
  }

  function onPriceChange(event) {
    const regex = /^[0-9\b]+$/;
    const value = event.target.value;
    if (value === "" || regex.test(value)) {
      setPrice(value);
    }
  }

  function onAmountChange(event) {
    const regex = /^[0-9\b]+$/;
    const value = event.target.value;
    if (value === "" || regex.test(value)) {
      setAmount(value);
    }
  }

  function onDetailChange(e) {
    setDetail(e.target.value);
  }

  function onDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function onImageUploadChange(e) {
    setImageDetail(e);
  }


  function onProductCategoryChange(e) {
    setCategory(e.target.value);
  }


  return (
    <div>
      <div>
        <div className="grid-container">
          <div>
            <span className="formFont">Product Name</span>
          </div>
          <div>
            <input
              type="text"
              id="product-name"
              value={productName}
              className="formInput"
              name="name"
              placeholder="Product Name"
              onChange={onProductNameChange}
              minLength="20"
              maxLength="120"
              required
            />
            {productName == "" ? (
              <p className="errorMsg">{errorMsgProduct}</p>
            ) : null}
          </div>

          <div>
            <span className="formFont">Price</span>
          </div>
          <div>
            <input
              type="text"
              id="numberField"
              value={price}
              onChange={onPriceChange}
              className="formInput"
              name="price"
              placeholder="Price"
              required
            />
            {price == "" ? <p className="errorMsg">{errorMsgPrice}</p> : null}
          </div>

          <div>
            <span className="formFont">Amount</span>
          </div>
          <div>
            <input
              type="text"
              id="numberField"
              value={amount}
              onChange={onAmountChange}
              className="formInput"
              name="amount"
              placeholder="Amount"
              required
            />
            {amount == "" ? <p className="errorMsg">{errorMsgAmount}</p> : null}
          </div>

          <div>
            <span className="formFont">Detial</span>
          </div>
          <div>
            <input
              type="text"
              id="detail"
              className="formInput"
              name="detail"
              placeholder="Detail"
              onChange={onDetailChange}
              required
              minLength="20"
              maxLength="500"
            />
            {detail == "" ? <p className="errorMsg">{errorMsgDetial}</p> : null}
          </div>

          <div>
            <span className="formFont">Description</span>
          </div>
          <div>
            <textarea
              className="formInputDescription"
              rows="6"
              cols="50"
              id="description"
              name="description"
              placeholder="Description"
              onChange={onDescriptionChange}
              required
              minLength="20"
              maxLength="5000"
            ></textarea>
            {description == "" ? (
              <p className="errorMsg">{errorMsgDescription}</p>
            ) : null}
          </div>

          <div>
            <span className="formFont">Pics</span>
          </div>
          <div>
            <ImageUpload
              onImageUploadChange={onImageUploadChange}
              errorMsgPic={errorMsgPic}
            />
          </div>

          <div>
            <span className="formFont">Product Category</span>
          </div>
          <div>
            <div className="select">
              <select
                className="selectStyle"
                defaultValue="menClothes"
                onChange={onProductCategoryChange}
              >
                <option value="menClothes">Men Clothes</option>
                <option value="womenClothes">Woman Clothes</option>
                <option value="accessories">Accessories</option>
                <option value="gadgets">Gadgets</option>
                <option value="snack">Snack</option>
              </select>
              {category == "" || category == undefined ? (
                <p className="errorMsg">{errorMsgCategory}</p>
              ) : null}
            </div>
          </div>

          <div>
            <span className="formFont">Sell ID</span>
          </div>
          <div>
            <input
              type="text"
              id="sellId"
              className="formInput"
              name="sellId"
              placeholder="Sell ID"
              disabled
            />
          </div>
        </div>
        <div className="grid-container2">
          <div className="button-container">
            <button className="button buttonAdd" onClick={Add}>
              Add Product
            </button>
          </div>
        </div>
      </div>
      <div>
        {text === true
          ? productName + price + amount + detail + description + category
          : null}
      </div>
    </div>
  );
};