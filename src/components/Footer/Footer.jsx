import React, { useEffect, useRef } from "react";
import Logo from "../../assets/logo4.png";
import { useTranslation } from "react-i18next";
import { Links } from "../../lib/data";
import { Link } from "react-router-dom";
import Aos from "aos";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Footer = () => {
  const { t } = useTranslation();
  const title = t("footer.title");
  const title_m = t("footer.title_m");
  const top1 = t("footer.top1");
  const top2 = t("footer.top2");
  const top3 = t("footer.top3");
  const desc = t("footer.desc");
  const links = Links(t);
  const contacts = [
    t("footer.address"),
    "Bnpuz@bk.ru",
    "bnp_fabrik",
    "info@bnpfabric.com",
    "+998 93 383 75 85",
    "+998 93 960 78 00",
  ];
  const email = t("footer.email");
  const btn = t("footer.btn");
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
const emailRef = useRef()
  const handleMessage = async (e) => {
    e.preventDefault();
    let message = `
      email: ${e.target[0].value},
    `;
    const success = t("contacts.notification");
    const error_message = t("contacts.notification_err");
    const token = "6760426179:AAFDNf2L7dlpw_AMViU2xF4tMoYa5p90L_k";
    const chatId = "5575104582";
    const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    try {
      const response = await axios.post(telegramApiUrl, {
        chat_id: chatId,
        text: message,
      });
      if (response?.status === 200) {
        toast.success(success);
        emailRef.current.value = "";
      }
    } catch (error) {
      toast.error(error_message);
      console.log(error);
    }
  };
  return (
    <footer className="w-[100%] px-[10px] md:px-[40px] py-[60px]">
      <ToastContainer/>
      <div className="w-[100%] flex gap-[30px] flex-wrap sm:justify-between items-start">
        <div className="flex flex-col gap-[30px]">
          <div className="flex items-center gap-[10px]">
            <img
              src={Logo}
              alt="Logo"
              className="w-[60px] sm:w-[100px] h-[60px] sm:h-[100px]"
            />
            <div>
              <h5 className="text-[24px] sm:text-[30px] font-[700] max-w-[250px] leading-7">
                {title}
              </h5>
              <h5 className="text-[10px] uppercase text-gray-400">{title_m}</h5>
            </div>
          </div>
          <p className="max-w-[300px] text-gray-400 font-[300]">{desc}</p>
        </div>
        <div className="flex flex-col gap-[5px]">
          <h4 className="font-[500] text-[18px] mb-[30px]">{top1}</h4>
          {links?.map((item, index) => (
            <Link
              to={item?.path}
              key={index}
              onClick={handleScrollToTop}
              className="hover:text-orange-300 transition-all text-gray-500"
            >
              {item?.text}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-[5px]">
          <h4 className="font-[500] text-[18px] mb-[30px]">{top2}</h4>
          {contacts?.map((item, index) => (
            <p key={index} className="text-gray-500">
              {item}
            </p>
          ))}
        </div>
        <div
          className="flex flex-col gap-[40px] w-[400px]"
        >
          <h4 className="font-[500] text-[18px]">{top3}</h4>
          <form onSubmit={handleMessage} className=" bg-gradient-to-r from-gray-200 to-gray-300 p-[10px] rounded-full flex justify-end">
            <input
            required
            ref={emailRef}
              type="email"
              className="w-[100%] outline-none bg-transparent px-[20px] text-[18px]"
              placeholder={email}
            />
            <button className="global__btn bg-orange-300 text-white font-[400] shadow-md hover:bg-black transition-all">
              {btn}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
