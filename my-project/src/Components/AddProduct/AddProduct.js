import React, {  } from "react";
import ImageUpload from "./AddImage";
import "./AddProduct.css";
import FormData from "form-data";
import axios from 'axios';
import { Confirm } from 'react-st-modal';



class AddProduct extends React.Component{
  constructor(props) {
    super(props);
    this.state = {productName: '', productPrice: null,productAmount:0,productDetails:'',productDescription:'',productPics:null,productCategory:'',sellerID:localStorage.getItem('userId'),text:'',errorMsgProduct:'',errorMsgPrice:'',errorMsgAmount:'',errorMsgDetial:'',errorMsgDescription:'',errorMsgPic:'',errorMsgCategory:'' };
    this.handleChange = this.handleChange.bind(this);
    this.onImageUploadChange = this.onImageUploadChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
  }

  onClick = async () => {
    
    if (this.state.productName === '') {
      this.setState({errorMsgProduct:"Please input Product Name!"});
    }
    if (this.state.productPrice === '') {
      this.setState({errorMsgPrice:"Please input Price"});
    } 
    if (this.state.productAmount === '') {
      this.setState({errorMsgAmount:"Please input Amount"});
    }
    if (this.state.productDetails === '') {
      this.setState({errorMsgDetial:"Please input Detail"});
    }
    if (this.state.description === '') {
      this.setState({errorMsgDescription:"Please input Description"});
    }
    if (this.state.productPics === null || typeof this.state.productPics === 'undefined') {
      this.setState({errorMsgPic:"Please upload Image"});
    }
    if (this.state.productCategory === '') {
      this.setState({errorMsgCategory:"Please select Category"});
    }else{

      const isConfirm = await Confirm(
        'Are you sure you want to add product?'
      );
    
      if (isConfirm) {
        this.Add();
      }
    }
  };

  handleChange(event) {
    switch(event.target.id) {
    case 'productName': 
      this.setState({productName: event.target.value});
      break;
    case 'productPrice': 
      this.setState({productPrice: parseFloat(event.target.value).toFixed(2)});
      break;
    case 'productAmount': 
      this.setState({productAmount: Number(event.target.value)});
      break;
    case 'productDetails': 
      this.setState({productDetails: event.target.value});
      break;
    case 'productDescription': 
      this.setState({productDescription: event.target.value});
      break;
    case 'productCategory': 
      this.setState({productCategory: event.target.value});
      break;
    case 'sellerID': 
      this.setState({sellerID: Number(event.target.value)});
      break;
    default:
      break;
  }
}

  Add() {
    
      console.log("Complete!");
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "multipart/form-data");
      myHeaders.append("Cookie", "JSESSIONID=E63C09469D7E953EE19AC2030257601B");

      var formdata = new FormData();
      formdata.append("productPics", this.state.productPics);
      formdata.append("data", JSON.stringify(this.state));
      
      axios.post("/csc105_backend_war_exploded/product/create", formdata,myHeaders)
      .then(response => console.log(response),window.location.href=("/shop/product"))
      .catch(errors => console.log(errors));

    //   fetch("/csc105_backend_war_exploded/product/create", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
  }

 onPriceChange(event) {
    // const regex = /^[0-9\b]+$/;

    // const value = event.target.value;
    // if (value === "" || regex.test(value)) {
      this.handleChange(event);
    // }
  }

   onAmountChange(event) {
    const regex = /^[0-9\b]+$/;
    const value = event.target.value;
    if (value === "" || regex.test(value)) {
      this.handleChange(event);
    }
  }

  onImageUploadChange(e) {
    this.setState({ productPics: e.target.files[0] });
  }

render(){
  return <div>
    <div>
      <div>
        <div className="grid-container">
          <div>
            <span className="formFont">Product Name</span>
          </div>
          <div>
            <input
              type="text"
              id="productName"
              value={this.state.productName}
              className="formInput"
              name="name"
              placeholder="Product Name"
              onChange={this.handleChange}
              minLength="20"
              maxLength="120"
              required
            />
            {this.state.productName === "" ? (
              <p className="errorMsg">{this.state.errorMsgProduct}</p>
            ) : null}
          </div>

          <div>
            <span className="formFont">Price</span>
          </div>
          <div>
            <input
              type="number"
              id="productPrice"
              value={this.state.productPrice}
              onChange={this.onPriceChange}
              className="formInput"
              name="price"
              placeholder="Price"
              required
            />
            {this.state.productPrice === "" ? <p className="errorMsg">{this.state.errorMsgPrice}</p> : null}
          </div>

          <div>
            <span className="formFont">Amount</span>
          </div>
          <div>
            <input
              type="text"
              id="productAmount"
              value={this.state.productAmount}
              onChange={this.onAmountChange}
              className="formInput"
              name="amount"
              placeholder="Amount"
              required
            />
            {this.state.productAmount === "" ? <p className="errorMsg">{this.state.errorMsgAmount}</p> : null}
          </div>

          <div>
            <span className="formFont">Detail</span>
          </div>
          <div>
            <input
              type="text"
              id="productDetails"
              className="formInput"
              name="detail"
              value={this.state.productDetails}
              placeholder="Detail"
              onChange={this.handleChange}
              required
              minLength="20"
              maxLength="500"
            />
            {this.state.productDetails === "" ? <p className="errorMsg">{this.state.errorMsgDetial}</p> : null}
          </div>

          <div>
            <span className="formFont">Description</span>
          </div>
          <div>
            <textarea
              className="formInputDescription"
              rows="6"
              cols="50"
              id="productDescription"
              name="description"
              placeholder="Description"
              onChange={this.handleChange}
              required
              minLength="20"
              maxLength="5000"
              value={this.state.productDescription}
            ></textarea>
            {this.state.productDescription === "" ? (
              <p className="errorMsg">{this.state.errorMsgDescription}</p>
            ) : null}
          </div>

          <div>
            <span className="formFont">Pics</span>
          </div>
          <div>
            <ImageUpload
              onImageUploadChange={this.onImageUploadChange}
              errorMsgPic={this.state.errorMsgPic}
            />
          </div>

          <div>
            <span className="formFont">Product Category</span>
          </div>
          <div>
            <div className="select">
              <select id="productCategory"
                className="selectStyle"
                defaultValue="menClothes"
                onChange={this.handleChange}
                value={this.state.productCategory}
              >
                <option value="">---Please Select ---</option>
                <option value="menClothes">Men Clothes</option>
                <option value="womenClothes">Woman Clothes</option>
                <option value="accessories">Accessories</option>
                <option value="gadgets">Gadgets</option>
                <option value="snack">Snack</option>
              </select>
              {this.state.productCategory === "" || this.state.productCategory === undefined ? (
                <p className="errorMsg">{this.state.errorMsgCategory}</p>
              ) : null}
            </div>
          </div>

          <div>
            <span className="formFont">Sell ID</span>
          </div>
          <div>
            <input
              type="text"
              id="sellerID"
              className="formInput"
              name="sellerID"
              placeholder="Sell ID"
              value={this.state.sellerID}
              onChange={this.handleChange}
              disabled
            />
          </div>
        </div>
        <div className="grid-container2">
          <div className="button-container">
            <button className="button buttonAdd" onClick={() => { this.onClick() }}>
              Add Product
            </button>
          </div>
        </div>
      </div>
      <div>
        {this.state.text === true
          ? this.state.productName + this.state.productPrice + this.state.productAmount + this.state.productDetails + this.state.productDescription + this.state.productCategory
          : null}
      </div>
      
    </div>
    </div>
    

        }
};
export default AddProduct;