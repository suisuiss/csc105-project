import React from "react";
import "./Product.css";

const products = [
  {
    id: "product1",
    image:
      "https://dj7u9rvtp3yka.cloudfront.net/products/PIM-1546095976599-a1785a3b-a36a-491d-afe9-ad631d366262_v1-small.jpg",
    price: "599",
    description:
      "Men Shirt Slim Fit Design Solid Color Long Sleeve Formal Casual Business Male Clothing",
  },
  {
    id: "product2",
    image:
      "https://cdn.shopify.com/s/files/1/0071/5633/4681/products/Men_Teton_Twill_Pant_Slim_Fit_Smoke_232.jpg?v=1587646956",
    price: "489",
    description: "MEN'S TETON TWILL PANT RELAXED FIT | SLIM FIT",
  },
  {
    id: "product3",
    image:
      "https://cdn-img.prettylittlething.com/d/8/4/e/d84e609962c532e472cc8f460b28d5640869a12c_CLU4305_3.JPG",
    price: "569",
    description: "SHAPE BURGUNDY SATIN WRAP DRESS",
  },
  {
    id: "product4",
    image:
      "https://i.pinimg.com/originals/f6/cc/c5/f6ccc530b293cadf83151d653a77b730.jpg",
    price: "399",
    description: "Women High Neck Sleeveless Blouse",
  },
  {
    id: "product5",
    image:
      "https://www.haglofs.com/dw/image/v2/BBTN_PRD/on/demandware.static/-/Sites-master-catalog-haglofs/default/dw2674d8dc/hi-res/6043062C5_S20_2_grey.jpg?sw=350&sh=350&sm=fit",
    price: "239",
    description:
      "A sun hat with a brim - perfect for protection from a number of\nadverse weather conditions.",
  },
  {
    id: "product6",
    image:
      "https://static.zara.net/photos///2020/I/1/1/p/1202/610/050/2/w/1920/1202610050_1_1_1.jpg?ts=1597059771480",
    price: "299",
    description: "ASYMMETRIC LEATHER HIGH-HEEL SHOES",
  },
  {
    id: "product7",
    image:
      "https://th-test-11.slatic.net/p/2/yg300-mini-projector-by-mastersat-led-projector-usbsdavhdmi-6107-64100005-6f47290c035c6bdf1b83e95bad35d740-catalog.jpg_720x720q80.jpg_.webp",
    price: "1590",
    description: "Mini Projector By Mastersat",
  },
  {
    id: "product8",
    image: "https://cdn.alza.co.uk/ImgW.ashx?fd=f3&cd=TP820g",
    price: "1899",
    description: "TP-LINK Tapo C100 Home Security Wi-Fi Camera 1080P",
  },
  {
    id: "product9",
    image:
      "https://celebratingsweets.com/wp-content/uploads/2014/08/Chocolate-Cookies-3.jpg",
    price: "99",
    description:
      "Soft and chewy Chocolate Cookies loaded with three kinds of chocolate",
  },
  {
    id: "product10",
    image: "https://www.aimeemars.com/wp-content/uploads/2020/07/IMG_0727.jpg",
    price: "99",
    description: "Healthy Dark Chocolate Bark",
  },
];

const ProductItem = ({ id, image, price, description }) => {
  return (
    <div id={id} className="product-item">
      <img src={image} />
      <div className="product-item-detail">
        <h1>{price} Baht</h1>
        <pre>{description}</pre>
        <a href="" id={id}>
          see more details
        </a>
      </div>
      <div className="product-button-container">
        <div className="wrap-product-button-container">
          <button>Add To Shopping Cart</button>
        </div>
      </div>
    </div>
  );
};

export const Product = () => {
  return (
    <div className="product-container">
      <h2 id="recommend">Recommended Product</h2>
      {products.map((product) => ProductItem(product))}
    </div>
  );
};