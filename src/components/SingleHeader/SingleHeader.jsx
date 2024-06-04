import React from "react";
import { DATA, TableData } from "../../lib/data";
import { useTranslation } from "react-i18next";

const SingleHeader = () => {
  const { t } = useTranslation();
  const id = +window.location.href.split("/")[4]
  let product = DATA(t).find((item) => item?.id === id)
  const tableData = TableData(t)
  const category = t("singlePage.category")
  return (
    <header className="w-[100%] p-[20px] sm:p-[40px]">
      <div className="w-[100%] flex-col lg:flex-row flex items-center gap-[50px]">
        <div className="w-[100%] lg:w-[60%] max-h-[100vw] rounded-[20px] overflow-hidden">
          <img src={product?.img} alt={product?.title} className="w-[100%] h-[100%] ease-in-out duration-300 hover:scale-150"/>
        </div>
        <div className="w-[100%] lg:w-[40%] flex flex-col gap-[20px]">
            <h2 className="text-[24px] sm:text-[45px] font-[700]">{product?.title}</h2>
            <div className="flex flex-col w-[100%]">
                {
                    tableData?.map((item,index)=> {
                        return <div key={index} className="flex border border-gray-400">
                            <div className="p-[10px] sm:p-[20px] w-[40%] border-r text-[12px] md:text-[16px] border-r-gray-400 flex items-center">{item?.key}</div>
                            <div className="p-[10px] sm:p-[20px] w-[60%] text-[12px] md:text-[16px] flex items-center">{item?.value}</div>
                        </div>
                    })
                }
            </div>
            <p>{category}: <span className="text-orange-300">{product?.category}</span></p>
        </div>
      </div>
    </header>
  );
};

export default SingleHeader;
