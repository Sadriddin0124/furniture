import React, { useEffect } from "react";
import HeaderImg from "../../assets/header.png";
import { useTranslation } from "react-i18next";
import { HiOutlineTruck } from "react-icons/hi2";
import { VscVerified } from "react-icons/vsc";
import { SlEarphones } from "react-icons/sl";
import { IoWalletOutline } from "react-icons/io5";
import Aos from "aos";

const Header = () => {
  const { t } = useTranslation();
  const title1 = t("header.title_t");
  const title2 = t("header.title_m");
  const title3 = t("header.title_b");
  const data = [
    {
      title: t("header.title1"),
      subtitle: t("header.subtitle1"),
      icon: <HiOutlineTruck />,
    },
    {
      title: t("header.title2"),
      subtitle: t("header.subtitle2"),
      icon: <VscVerified />,
    },
    {
      title: t("header.title3"),
      subtitle: t("header.subtitle3"),
      icon: <SlEarphones />,
    },
    {
      title: t("header.title4"),
      subtitle: t("header.subtitle4"),
      icon: <IoWalletOutline />,
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);
  return (
    <header className="w-[100%] px-[10px] md:px-[20px] flex flex-col items-center gap-[50px] pb-[50px]">
      <div data-aos="zoom-out" className="w-[100%] min-h-[30vh] sm:min-h-[50vh] lg:min-h-[90vh] bg-zinc-700 rounded-3xl flex justify-end p-[40px] relative">
        <img
          loading="lazy"
          src={HeaderImg}
          alt="HeaderImg"
          className="absolute hidden sm:block z-10 left-0 sm:left-0 w-[70%] sm:w-[60%] top-0 "
        />
        <div data-aos="fade-up" className="flex flex-col gap-0">
          <h1 className=" leading-5 text-[20px] sm:leading-none sm:text-[40px] lg:text-[60px] text-end font-[600] text-white">
            {title1}
          </h1>
          <h1 className=" leading-9 text-[35px] sm:leading-none sm:text-[70px] lg:text-[100px] text-end font-[600] text-white">
            {title2}
          </h1>
          <h1 className=" leading-10 text-[45px] sm:leading-none sm:text-[100px] lg:text-[140px] text-end font-[600] text-white">
            {title3}
          </h1>
        </div>
      </div>
      <div className="w-[100%] flex justify-center items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[20px] justify-center mt-[50px]">
          {data?.map((item, index) => {
            return (
              <div data-aos="fade-left" key={index} className="flex items-center gap-[20px]">
                <div className="text-[60px] md:text-[80px] text-orange-300">{item?.icon}</div>
                <div className="flex flex-col">
                  <h3 className="text-[14px] md:text-[18px] font-[700]">{item?.title}</h3>
                  <p className="text-[14px] md:text-[18px] text-gray-400">{item?.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
