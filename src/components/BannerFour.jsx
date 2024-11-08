import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leadImg from "../assets/photo/lead-01.png";
import leadImg2 from "../assets/photo/lead-02.png";
import leadImg3 from "../assets/photo/lead-03.png";
import leadImg4 from "../assets/photo/lead-04.png";
import leadImg5 from "../assets/photo/lead-05.png";
import leadImg6 from "../assets/photo/nope.png";

const BannerFour = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <section>
      <div>
        <p className="text-center text-rose-400 text-xl font-bold">
          Trusted By
        </p>
        <h1 className="text-center text-4xl font-bold mt-5">
          500+ Leading Universities And Companies
        </h1>
      </div>
      <Slider {...settings} className="mt-10 max-w-screen-xl mx-auto mb-20">
        <div>
          <img src={leadImg} alt="leadImg" />
        </div>
        <div>
          <img src={leadImg2} alt="leadImg2" />
        </div>
        <div>
          <img src={leadImg3} alt="leadImg3" />
        </div>
        <div>
          <img src={leadImg4} alt="leadImg4" />
        </div>
        <div>
          <img src={leadImg5} alt="leadImg5" />
        </div>
        <div>
          <img src={leadImg6} alt="leadImg6" />
        </div>
      </Slider>
    </section>
  );
};

export default BannerFour;
