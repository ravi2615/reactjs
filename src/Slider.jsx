import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from "../src/images/slide-1.png";

const Slider = () => {
    return (
        <>
    <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover interval={3000} showArrows={true} showIndicators showThumbs={false}>
                <div>
                    <img src={img} alt="slider_img" />
                </div>
                <div>
                    <img src={img} alt="slider_img"/>
                </div>
                <div>
                    <img src={img} alt="slider_img"/>
                </div>
            </Carousel>
        </div>
  </>
);
    }

export default Slider;