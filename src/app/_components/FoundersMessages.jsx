"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { cards } from "../_constants";
import { MdKeyboardArrowRight ,MdKeyboardArrowLeft } from "react-icons/md";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={40} color="#d71515" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={40} color="#d71515" />
    </div>
  );
};


const FoundersMessages = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 425,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-auto h-auto">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-3 flex justify-center items-center">
            <div className="xl:h-[400px] lg:h-[350px] md:h-[300px] h-auto w-auto bg-white p-6 rounded-lg mx-2 cursor-pointer shadow-md overflow-hidden">
              <div className="flex items-center mb-3">
                <div className="mr-3">{card.icon}</div>
                <h3 className="lg:text-lg  text-md font-bold text-primary">{card.title}</h3>
              </div>
              <p className="xl:text-lg text-md  text-[#868686] text-left">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FoundersMessages;
