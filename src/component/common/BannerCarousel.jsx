import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./common.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerCarousel = ({ carousel }) => {
  return (
    <div className="app-carousel app-box-shadow">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={true}
      >
        {carousel.map((data) => (
          <div key={data.id}>
            <img
              src={data.bannerImageUrl}
              alt={data.bannerImageAlt}
              loading="lazy"
              width="100%"
              height="250"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
