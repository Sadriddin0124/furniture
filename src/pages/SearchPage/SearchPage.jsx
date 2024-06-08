import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Collection from "../../components/Collection/Collection";
import { useTranslation } from "react-i18next";
import { DATA } from "../../lib/data";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const SearchPage = () => {
  const { t } = useTranslation();
  const data = DATA(t);
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const searchValue = sessionStorage.getItem("search");
    const filter = data?.filter((item) =>
      item?.title?.toLowerCase().includes(searchValue?.toLowerCase())
    );
    setSearchData(filter);
  }, []);
  console.log();
  console.log(searchData);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const title = t("search.title")
  const link = t("search.link")
  return (
    <div>
      <Navbar />
      {searchData.length ? (
        <Collection data={searchData} />
      ) : (
        <div className="w-[100%] px-[10px] h-[300px] flex justify-center items-center flex-col gap-[20px]">
          <h1 className="text-[24px]">{title}</h1>
          <Link onClick={handleScrollToTop} to="/collection" className="global__btn bg-orange-300 text-white flex items-center gap-[10px] transition-all hover:bg-black text-[20px]">
            <IoChevronBackOutline size={24}/> {link}
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SearchPage;
