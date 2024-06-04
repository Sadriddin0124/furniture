import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { NewsData } from "../../lib/data";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SingleNew = () => {
  const { t } = useTranslation();
  const data = NewsData(t);
  const { id } = useParams();
  const NewsItem = data?.find((item) => item?.id === Number(id));
  const title = t("singleNews.title");
  const subtitle = t("singleNews.subtitle");
  const email = t("singleNews.email");
  const website = t("singleNews.website");
  const comment = t("singleNews.comment");
  const btn = t("singleNews.btn");
  const emailRef = useRef();
  const websiteRef = useRef();
  const commentRef = useRef();
  const handleMessage = async (e) => {
    e.preventDefault();
    let message = {
      email: e.target[0].value,
      website: e.target[1].value,
      comment: e.target[2].value,
    };
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
        websiteRef.current.value = "";
        commentRef.current.value = "";
      }
    } catch (error) {
      toast.error(error_message);
      console.log(error);
    }
  };
  return (
    <header className="w-[100%] py-[40px] px-[20px] md:px-[40px] flex flex-col items-center">
      <ToastContainer/>
      <div className="w-[100%] flex flex-col items-center gap-[30px]">
        <img
          src={NewsItem?.img}
          alt={NewsItem?.title}
          className="w-[100%] object-cover md:min-h-[100vh] rounded-[20px]"
        />
        <div className="w-[100%] md:w-[70%] flex gap-[5px] text-[18px]">
          <span className=" text-orange-300">{NewsItem?.top1}</span>-
          <span className=" capitalize">{NewsItem?.top2}</span>
        </div>
        <p className="w-[100%] md:w-[70%] md:text-[18px] leading-6 text-[14px] sm:leading-9">
          {NewsItem?.desc}
        </p>
      </div>
      <div className="flex flex-col w-[100%] md:w-[70%] gap-[10px] py-[100px]">
        <h3 className="text-[24px] font-[700]">{title}</h3>
        <p className="mb-[30px] text-[16px]">{subtitle} *</p>
        <form
          onSubmit={handleMessage}
          className="w-[100%] flex flex-col items-end gap-[30px]"
        >
          <div className="flex flex-col md:flex-row w-[100%] gap-[30px]">
            <input
              required
              type="email"
              ref={emailRef}
              placeholder={email}
              className="focus:placeholder:text-black focus:placeholder:font-[700] w-[100%] outline-none bg-gray-100 h-[50px] px-[30px] rounded-[20px]"
            />
            <input
              required
              ref={websiteRef}
              type="text"
              placeholder={website}
              className="focus:placeholder:text-black focus:placeholder:font-[700] w-[100%] outline-none bg-gray-100 h-[50px] px-[30px] rounded-[20px]"
            />
          </div>
          <textarea
            required
            ref={commentRef}
            placeholder={comment}
            rows="15"
            className="focus:placeholder:text-black focus:placeholder:font-[700] w-[100%] outline-none bg-gray-100 rounded-[20px] resize-none px-[30px] py-[20px]"
          ></textarea>
          <button className="global__btn w-[200px] text-white bg-orange-300 hover:bg-black transition-all">
            {btn}
          </button>
        </form>
      </div>
    </header>
  );
};

export default SingleNew;
