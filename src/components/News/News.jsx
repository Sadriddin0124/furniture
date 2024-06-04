import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NewsData } from "../../lib/data";
import { Link } from "react-router-dom";
import Aos from "aos";

const News = () => {
  const { t } = useTranslation();
  const data = NewsData(t);
  const title = t("news.title");
  const subtitle = t("news.subtitle");
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="w-[100%] px-[10px] lg:px-[40px] py-[100px] flex flex-col gap-[20px] items-center">
      <h1 data-aos="fade-up" className="text-[40px] font-[700]">{title}</h1>
      <p data-aos="fade-up" className="text-[18px] capitalize text-gray-400 mb-[60px]">
        {subtitle}
      </p>
      <div data-aos="fade-up" className="w-[100%] grid grid-cols-1 md:grid-cols-3 gap-[20px] lg:gap-[40px]">
        {data?.map((item, index) => {
          return (
            <Link onClick={handleScrollToTop} to={`/single_news/${item?.id}`} key={index} className="flex flex-col gap-[20px]">
              <img
                src={item?.img}
                alt={item?.title}
                className="min-h-[200px] w-[100%] object-cover rounded-[20px] ease-linear duration-300 hover:shadow-xl"
              />
              <div className="flex gap-[10px] text-[14px] lg:text-[18px] text-gray-500">
                <h5>{item?.top1}</h5>-<h5>{item?.top2}</h5>
              </div>
              <h4 className="text-[20px] lg:text-[24px] font-[700]">{item?.title}</h4>
              <p className="overflow-hidden line-clamp-3 text-[14px] lg:text-[16px]">{item?.desc}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default News;
