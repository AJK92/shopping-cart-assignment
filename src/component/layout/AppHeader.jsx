import React from "react";
import { Link } from "react-router-dom";
import "./layout.scss";

const AppHeader = () => {
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
              <Link to="/" itemProp="url">
                SignIn
              </Link>
              <Link to="/register" itemProp="url">
                Register
              </Link>
            </div>
            <button className="app-cart-wrapper" onClick={() => {}}>
              <img
                src="/static/images/cart.svg"
                alt="shopping-cart"
                width="30"
                height="30"
                loading="lazy"
              />
              <span>{`0`} Items</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
