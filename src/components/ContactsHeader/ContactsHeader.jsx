import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { TfiEmail } from "react-icons/tfi";
import { PiPhoneCallLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import Aos from "aos";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const ContactsHeader = () => {
  const { t } = useTranslation();
  const title = t("contacts.title");
  const email = t("form.email");
  const number = t("form.number");
  const message = t("form.message");
  const btn = t("form.btn");
  const data = [
    {
      icon: <TfiEmail />,
      key: t("contacts.key1"),
      value: t("contacts.value1"),
    },
    {
      icon: <PiPhoneCallLight />,
      key: t("contacts.key2"),
      value: t("contacts.value2"),
    },
    {
      icon: <SlLocationPin />,
      key: t("contacts.key3"),
      value: t("contacts.value3"),
    },
  ];
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration in milliseconds
    });
  }, []);
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();
  const handleMessage = async (e) => {
    e.preventDefault();
    let message = [`
      name: ${e.target[0].value},
      phone: ${e.target[1].value},
      message: ${e.target[2].value},
    `]
    const success = t("contacts.notification")
    const error_message = t("contacts.notification_err")
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
        phoneRef.current.value = "";
        messageRef.current.value = "";
      }
    } catch (error) {
      toast.error(error_message);
      console.log(error);
    }
  };
  return (
    <header className="w-[100%] px-[20px] lg:px-[40px] py-[100px] items-center flex flex-col gap-[100px]">
      <ToastContainer/>
      <div className="flex flex-col md:flex-row w-[100%] gap-[30px] justify-between">
        <div className="w-[100%] md:w-[50%] lg:w-[40%] flex flex-col gap-[50px]">
          <h1 data-aos="fade-up" className="text-[40px] font-[700]">{title}</h1>
          <form onSubmit={handleMessage} data-aos="fade-up" className="w-[100%] flex flex-col gap-[20px] items-end">
            <input
            required
            ref={emailRef}
              type="email"
              placeholder={email}
              className="h-[55px] px-[30px] py-[15px] outline-none rounded-full w-[100%] bg-zinc-100"
            />
            <input
            required
            ref={phoneRef}
              type="text"
              placeholder={number}
              className="h-[55px] px-[30px] py-[15px] outline-none rounded-full w-[100%] bg-zinc-100"
            />
            <textarea
            required
            ref={messageRef}
              className="px-[30px] py-[20px] outline-none rounded-[20px] resize-none w-[100%] bg-zinc-100"
              rows="10"
              placeholder={message}
            ></textarea>
            <button className="global__btn bg-orange-300 w-[200px] text-white mr-[50px] hover:bg-black">
              {btn}
            </button>
          </form>
        </div>
        <iframe
          className="w-[100%] md:w-[50%] h-[300px] sm:h-[350px] md:h-[85vh]"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.6526359032846!2d64.459964!3d39.747453!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2sus!4v1717410495920!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-wrap gap-[30px] justify-between w-[90%]">
        {data?.map((item, index) => {
          return (
            <div data-aos="fade-left" key={index} className="flex items-center gap-[30px]">
              <div className="text-[60px] text-orange-300">{item?.icon}</div>
              <div>
                <span className="text-[18px] font-[600]">{item?.key}</span>
                <span className="text-[14px]">{item?.value}</span>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default ContactsHeader;
