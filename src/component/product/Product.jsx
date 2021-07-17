import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "./product.scss";
import ProductItem from "./ProductItem";
import { setFilter } from "../../redux/action";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const filter = useSelector((state) => state.CartReducer.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5001/products").then(
      (response) => {
        setProducts(response.data);
      },
      (error) => {
        console.error(error);
      }
    );
    axios.get("http://localhost:5001/categories").then(
      (response) => {
        setCategories(response.data);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const onCategoryChange = (e) => {
    if (e.target.value === "All") {
      dispatch(setFilter(null));
    } else {
      dispatch(setFilter(JSON.parse(e.target.value)));
    }
  };

  let filteredProducts = [...products];
  if (filter) {
    filteredProducts = products.filter((item) => item.category === filter.id);
  }

  return (
    <main className="app-product-wrapper width-wrapper">
      <aside className="app-category-container">
        <ul>
          {categories.map(
            (category) =>
              category.enabled && (
                <li
                  className={filter?.id === category.id ? "highlight" : ""}
                  key={category.id}
                  onClick={() => {
                    if (filter && filter.id === category.id) {
                      dispatch(setFilter(null));
                    } else {
                      dispatch(setFilter(category));
                    }
                  }}
                >
                  <span name={category.id}>{category.name}</span>
                </li>
              )
          )}
        </ul>
      </aside>
      <div className="app-mobile-category">
        <select
          name="category"
          id="category"
          className="select-option"
          onChange={onCategoryChange}
        >
          <option value="All" key="All">
            All
          </option>
          {categories.map(
            (item) =>
              item.enabled && (
                <option style={{padding: '10px'}} value={JSON.stringify(item)} key={item.id}>
                  {item.name}
                </option>
              )
          )}
        </select>
      </div>
      <section className="app-product-container">
        {filteredProducts.map((product) => {
          return <ProductItem product={product} key={product.id}/>;
        })}
      </section>
    </main>
  );
};

export default Product;
