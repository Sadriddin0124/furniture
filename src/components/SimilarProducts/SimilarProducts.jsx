import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import Aos from "aos";
import { DATA } from "../../lib/data";
const SimilarProducts = () => {
  const { t } = useTranslation();
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    initialSlide: 0,
    type: "bool",
    default: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    Aos.init({
      duration: 800, 
    });
  }, []);
  const data = DATA(t)
  const id = +window.location.href.split("/")[4];
  const category = data?.find(item=> item?.id === id).category
  const title =  t("singlePage.title2")
  return (
    <div className="slider-container w-[90%] ml-[5%] my-[40px]">
      <h1 className="text-[24px] md:text-[40px] font-[700] w-[100%] text-center mb-[30px]">{title}</h1>
      <Slider {...settings}>
        {
          data?.filter(item=> item?.category === category)?.map((item,index)=> {
            return <div key={index} className=" group h-[380px] pb-[70px] px-[10px]">
              <img src={item?.img} alt={item?.title} className="w-[100%] h-[100%] rounded-[20px] object-cover"/>
              <h4 className="text-[20px] group-hover:text-orange-300 duration-300 ease-in-out font-[500] group-hover:font-[700]">{item?.title}</h4>
            </div>
          })
        }
      </Slider>
    </div>
  );
};

export default SimilarProducts;
