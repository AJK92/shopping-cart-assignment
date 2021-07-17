import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action";
import "./product.scss";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div key={product.id} className="app-product-item-wrapper">
      <h5 className="app-product-item-name">
        <b>{product.name}</b>
      </h5>
      <div className="app-product-item-content">
        <img
          src={product.imageURL}
          alt={product.name}
          loading="lazy"
          width="100"
          height="100"
        ></img>
        <div className="item-desc-wrapper">
          <p className="app-product-item-desc">{product.description}</p>
          <div className="app-product-item-buynow">
            <span>MRP Rs.{product.price}</span>
            <div className="btn-desktop">
              <button
                className="app-btn"
                onClick={() => dispatch(addToCart(product))}
              >
                Buy Now
              </button>
            </div>
            <div className="btn-mobile">
              <button
                className="app-btn"
                onClick={() => dispatch(addToCart(product))}
              >
                Buy Now @ Rs.{product.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
