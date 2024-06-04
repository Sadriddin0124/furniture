import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo4.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Flag1 from "../../assets/flag1.png";
import Flag2 from "../../assets/flag2.jpg";
import Flag3 from "../../assets/flag3.svg";
import Flag4 from "../../assets/flag4.webp";
import { IoIosArrowDown } from "react-icons/io";
import { switchLang } from "../../plugins/changeLang";
import { Links } from "../../lib/data";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const { t } = useTranslation();
  const links = Links(t);
  const [activeLang, setActiveLang] = useState("en");
  const language = [
    { id: "ru", lang: "Russian", flag: Flag1 },
    { id: "uz", lang: "Uzbek", flag: Flag2 },
    { id: "en", lang: "English", flag: Flag3 },
    { id: "pol", lang: "Polish", flag: Flag4 },
  ];
  const lang = language.filter((item) => item?.id !== activeLang);
  const url = window.location.href.split("/")[3];
  const [langVisible, setLangVisible] = useState(false);
  const changeLang = (id) => {
    sessionStorage.setItem("lang", id);
    switchLang(id);
    setActiveLang(id);
    setLangVisible(!langVisible);
  };
  useEffect(() => {
    let id = sessionStorage.getItem("lang");
    if (id) {
      setActiveLang(id);
      switchLang(id);
    } else {
      setActiveLang("en");
      switchLang("en");
    }
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [sideBar, setSideBar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };
    updateScrollPosition();
    window.addEventListener("scroll", updateScrollPosition);
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);
  return (
    <nav className="w-[100%] px-[10px] sm:px-[30px] py-[10px] flex items-center justify-between md:justify-start gap-[50px] relative z-[20]">
      <Link onClick={handleScrollToTop} to="/" className="h-[80px] w-[80px] block">
        <img src={Logo} alt="logo" className="w-[100%] h-[100%]" />
      </Link>
      <button className={`${scrollPosition > 100 ? "" : "hidden"} fixed right-[10%] bottom-[50px] bg-orange-300 text-white shadow-lg shadow-orange-300 p-[5px] rounded-[10px]`} onClick={handleScrollToTop}><IoIosArrowUp size={30}/></button>
      <ul className="hidden md:flex gap-[50px]">
        {links?.map((item, index) => {
          return (
            <li
              onClick={handleScrollToTop}
              key={index}
              className={`${
                "/" + url === item?.path ? "text-black" : " text-zinc-400"
              } hover:text-black duration-300 ease-in-out cursor-pointer`}
            >
              <Link to={item?.path}>{item?.text}</Link>
            </li>
          );
        })}
      </ul>
      <ul
        className={`${
          langVisible ? "" : "top-[-110px]"
        } z-[50] bg-slate-200 ease-in-out duration-500 flex flex-col gap-[12px] fixed top-0 right-[50px] sm:right-[100px] py-[5px] px-[10px] w-[160px] cursor-pointer`}
      >
        {lang?.map((item, index) => {
          return (
            <li
              key={index}
              className="flex gap-[5px] items-center"
              onClick={() => changeLang(item?.id)}
            >
              <img
                className="w-[30px] h-[20px] object-cover"
                src={item?.flag}
                alt={item?.lang}
              />
              <h6>{item?.lang}</h6>
            </li>
          );
        })}
        <li
          onClick={() => setLangVisible(!langVisible)}
          className={`${
            langVisible ? "" : "h-[100%]"
          } border ease-in-out duration-500  w-[100%] relative z-40 bg-slate-200  flex gap-[5px] items-center`}
        >
          <img
            className="w-[30px] h-[20px] object-cover"
            src={language?.find((item) => item?.id === activeLang)?.flag}
            alt="flag"
          />
          <h6>{language?.find((item) => item?.id === activeLang)?.lang}</h6>
          <IoIosArrowDown
            className={`${langVisible ? "rotate-[180deg]" : ""} ml-[30px]`}
          />
        </li>
      </ul>
      <aside
        className={`${
          sideBar ? "top-0 " : " top-[-120vh] opacity-0"
        } ease-linear duration-500 w-[100%] h-[100vh] fixed bg-white z-[50] gap-[20vh] left-0 flex flex-col items-center justify-start py-[30px]`}
      >
        <button
          onClick={() => setSideBar(!sideBar)}
          className="border border-gray-400 text-gray-400 ease-linear duration-300 hover:text-black hover:border-black p-[5px] rounded-full"
        >
          <VscChromeClose size={24} />
        </button>
        <ul className="flex flex-col items-center gap-[50px]">
          {links?.map((item, index) => {
            return (
              <li
              onClick={handleScrollToTop}
                key={index}
                className={`${
                  "/" + url === item?.path ? "text-black" : " text-zinc-400"
                } hover:text-black duration-300 ease-in-out cursor-pointer text-[24px]`}
              >
                <Link onClick={()=>setSideBar(!sideBar)} to={item?.path}>{item?.text}</Link>
              </li>
            );
          })}
        </ul>
      </aside>
      <button onClick={() => setSideBar(!sideBar)} className="block md:hidden">
        <HiMiniBars3CenterLeft className=" rotate-[180deg]" size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
