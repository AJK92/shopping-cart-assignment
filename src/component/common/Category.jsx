import React from "react";
import "./common.scss";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/action";
import { useHistory } from "react-router";

const Category = ({ categories }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      {categories.map((category) => {
        return (
          (category.enabled && (
            <div className="app-category-wrapper app-box-shadow" key={category.id}>
              <div className="app-content-wrapper">
                <h2 className="app-content-spacing"> {category.name} </h2>
                <p> {category.description} </p>
                <div className="app-btn-wrapper">
                  <button
                    className="app-btn"
                    onClick={() => {
                      dispatch(setFilter(category));
                      history.push("/product");
                    }}
                  >
                    Explore {category.key}
                  </button>
                </div>
              </div>
              <div className="app-image-wrapper">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="banner-image"
                />
              </div>
            </div>
          )) ||
          null
        );
      })}
    </>
  );
};

export default Category;
