import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { About } from "../../lib/data";
import AboutImg from "../../assets/about.png";
import Aos from "aos";
const AboutHeader = () => {
  const { t } = useTranslation();
  const data = About(t);
  const title = t("about.title");
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);
  return (
    <header className="w-[100%] px-[10px] sm:px-[40px] py-[100px]">
      <h1 data-aos="fade-up" className="text-[30px] md:text-[50px] mb-[30px] font-[700]">{title}</h1>
      <div className="flex flex-col-reverse md:flex-row items-center gap-[30px] lg:gap-[80px]">
        <div data-aos="fade-up" className="flex flex-col gap-[40px]">
          {data?.map((item, index) => {
            return (
              <div key={index} className="w-[100%] flex flex-col gap-[20px]">
                <img
                  src={item?.img}
                  alt={item?.text}
                  className="w-[100%]  h-[350px] rounded-tl-[30px] rounded-br-[30px] object-cover"
                />
                <p className="text-[14px] sm:text-[20px] text-gray-400">{item?.text}</p>
              </div>
            );
          })}
        </div>
        <div data-aos="fade-down" className=" shadow-2xl rounded-[20px] overflow-hidden">
          <img src={AboutImg} alt="AboutImg" />
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
