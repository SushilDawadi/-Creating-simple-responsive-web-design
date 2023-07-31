import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/service1.jpg";
import img2 from "../assets/service2.jpg";
import img3 from "../assets/service3.jpg";
const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
        showThumbs={false}
      >
        <div>
          <img src={img1} alt="" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
