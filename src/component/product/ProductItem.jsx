import React from "react";
import "./product.scss";

const ProductItem = ({ product }) => {
  return (
    <div className="app-product-item-wrapper">
      <h5 className="app-product-item-name">
        <b>{product.name}</b>
      </h5>
      <img
        src={product.imageURL}
        alt={product.name}
        loading="lazy"
        width="100"
        height="100"
      ></img>
      <p className="app-product-item-desc">{product.description}</p>
      <div className="app-product-item-buynow">
        <span>MRP Rs.{product.price}</span>
        <div>
          <button className="app-btn">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
