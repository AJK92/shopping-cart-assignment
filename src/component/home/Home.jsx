import React, { useEffect, useState } from "react";
import axios from "axios";
import BannerCarousel from "../common/BannerCarousel";
import Category from "../common/Category";

const Home = () => {
  const [carousel, setCarousel] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/banners").then(
      (response) => {
        setCarousel(response.data);
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
    <section className="width-wrapper">
      <BannerCarousel carousel={carousel} />
      <Category categories={categories} />
    </section>
  );
};

export default Home;
