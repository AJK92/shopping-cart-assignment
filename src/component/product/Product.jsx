import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.scss";
import ProductItem from "./ProductItem";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

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

  return (
    <main className="app-product-wrapper width-wrapper">
      <aside className="app-category-container">
        <ul>
          {categories.map(
            (category) =>
              category.enabled && (
                <li key={category.id}>
                  <span name={category.id}>{category.name}</span>
                </li>
              )
          )}
        </ul>
      </aside>
      <section className="app-product-container">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </section>
    </main>
  );
};

export default Product;
