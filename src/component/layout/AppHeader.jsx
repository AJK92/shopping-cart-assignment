import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import "./layout.scss";

const AppHeader = () => {
  const [showCart, setShowCart] = useState(false);
  const itemCount = useSelector((state) => state.CartReducer.itemCount);

  const onCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <header>
      <nav className="app-navbar">
        <div className="app-navbar-wrapper width-wrapper">
          <div className="app-block">
            <Link to="/" className="app-logo" itemProp="url">
              <img
                src="/static/images/logo.png"
                srcSet="/static/images/logo_2x.png 1.5x, /static/images/logo_2x.png 2x"
                alt="sabka-bazar-logo"
                loading="lazy"
                width="140"
                height="70"
              ></img>
            </Link>
            <div className="app-menu-block">
              <Link to="/" itemProp="url">
                Home
              </Link>
              <Link to="/product" itemProp="url">
                Products
              </Link>
            </div>
          </div>
          <div>
            <div className="app-menu-block">
              <Link to="/login" itemProp="url">
                SignIn
              </Link>
              <Link to="/register" itemProp="url">
                Register
              </Link>
            </div>
            <button className="app-cart-wrapper" onClick={onCartClick}>
              <img
                src="/static/images/cart.svg"
                alt="shopping-cart"
                width="30"
                height="30"
                loading="lazy"
              />
              <span>
                {itemCount} {itemCount > 1 ? "items" : "item"}
              </span>
            </button>
            {(showCart && <Cart onCartClick={onCartClick} />) || null}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
