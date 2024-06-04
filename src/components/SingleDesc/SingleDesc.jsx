import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { DATA } from "../../lib/data";
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SingleDesc = () => {
  const { t } = useTranslation();
  const desc_title = t("singlePage.desc_title");
  const reviews = t("reviews.reviews");
  const no_views = t("reviews.no_views");
  const title2 = t("reviews.title");
  const subtitle = t("reviews.subtitle");
  const mark = t("reviews.mark");
  const id = +window.location.href.split("/")[4];
  const product = DATA(t).find((item) => item?.id === id);
  const title = t("singlePage.title");
  const desc = t("singlePage.desc");
  const form = {
    name: t("form.name"),
    email: t("form.email"),
    feedback: t("form.feedback"),
    btn: t("form.btn2"),
  };
  const [active, setActive] = useState(false);
  const emailRef = useRef();
  const nameRef = useRef();
  const feedbackRef = useRef();
  const handleMessage = async (e) => {
    e.preventDefault();
    let message = [
      "name:" + e.target[0].value,
      "email:" + e.target[1].value,
      "feedback:" + e.target[2].value,
    ];
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
        nameRef.current.value = "";
        feedbackRef.current.value = "";
      }
    } catch (error) {
      toast.error(error_message);
      console.log(error);
    }
  };
  return (
    <section className="px-[20px] sm:px-[40px] w-[100%] py-[50px]">
      <ToastContainer />
      <nav className=" border-t flex justify-center gap-[40px] md:gap-[100px]">
        <h6
          onClick={() => setActive(false)}
          className={`py-[20px] text-[18px] hover:text-black ease-in-out duration-300 cursor-pointer font-[700] border-t-[4px] ${
            active
              ? "border-t-transparent text-gray-300"
              : "border-t-orange-300 text-black"
          }`}
        >
          {desc_title}
        </h6>
        <h6
          onClick={() => setActive(true)}
          className={`py-[20px] text-[18px] hover:text-black ease-in-out duration-300 cursor-pointer font-[700] border-t-[4px] ${
            active
              ? "border-t-orange-300 text-black"
              : "border-t-transparent text-gray-300"
          }`}
        >
          {reviews} (0)
        </h6>
      </nav>
      <div
        className={`${
          active ? "hidden" : ""
        } lg:px-[100px] py-[100px] flex justify-center`}
      >
        <div className="flex flex-col w-[100%] md:w-[80%] gap-[20px]">
          <h5 className="text-[20px] sm:text-[24px] font-[700]">
            {desc_title}
          </h5>
          <h4 className="text-[20px] sm:text-[24px] font-[700] text-zinc-600">
            {title} {product?.title}
          </h4>
          <p className=" text-zinc-400 font-[300]">{desc}</p>
        </div>
      </div>
      <div
        className={`${
          active ? "" : "hidden"
        } w-[100%] justify-center flex lg:px-[100px]`}
      >
        <div className="w-[100%] md:w-[80%] flex flex-col gap-[10px]">
          <h4>{reviews}</h4>
          <p className=" text-gray-400 my-[20px] sm:my-[50px]">{no_views}</p>
          <h3 className="text-[24px] font-[700]">
            {title2} "{title}"
          </h3>
          <p>{subtitle} *</p>
          <div className="flex gap-[15px] mb-[30px]">
            <p className="text-[18px] font-[500]">{mark} *</p>
            <div className="flex gap-[5px] text-orange-300 text-[20px]">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarOutline />
              <IoStarOutline />
            </div>
          </div>
          <form
            onSubmit={handleMessage}
            className="w-[100%] flex flex-col gap-[20px] items-end"
          >
            <div className="flex flex-col sm:flex-row gap-[20px] w-[100%]">
              <div className="flex flex-col gap-[10px] w-[100%]">
                <label>{form?.name} *</label>
                <input
                  required
                  ref={nameRef}
                  type="text"
                  className="h-[50px] px-[20px] py-[10px] outline-none rounded-full w-[100%] bg-zinc-100"
                />
              </div>
              <div className="flex flex-col gap-[10px] w-[100%]">
                <label>{form?.email} *</label>
                <input
                  required
                  ref={emailRef}
                  type="email"
                  className="h-[50px] px-[20px] py-[10px] outline-none rounded-full w-[100%] bg-zinc-100"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[10px] w-[100%]">
              <label>{form?.feedback} *</label>
              <textarea
                required
                ref={feedbackRef}
                className="px-[20px] py-[10px] outline-none rounded-[20px] resize-none w-[100%] bg-zinc-100"
                rows="10"
              ></textarea>
            </div>
            <button className="global__btn bg-orange-300 w-[200px] text-white hover:bg-black">
              {form?.btn}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingleDesc;
