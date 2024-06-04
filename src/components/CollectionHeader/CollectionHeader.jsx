import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { DATA } from "../../lib/data";
import { Link, useNavigate } from "react-router-dom";

const CollectionHeader = () => {
  const { t } = useTranslation();
  const searchPlaceholder = t("collection.search");
  const title = t("collection.title");
  const collections = [
    t("collection.collection1"),
    t("collection.collection2"),
    t("collection.collection3"),
  ];
  const data = DATA(t);
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(12);
  useEffect(() => {
    const pageStart = +sessionStorage.getItem("pageStart");
    const pageEnd = +sessionStorage.getItem("pageEnd");
    if (pageStart) {
      setPageStart(pageStart);
    } else {
      setPageStart(0);
    }
    if (pageEnd) {
      setPageEnd(pageEnd);
    } else {
      setPageEnd(12);
    }
    const category = sessionStorage.getItem("category");
    if (category) {
      setActiveCategory(category);
    }
  }, []);
  const paginated = data.slice(pageStart, pageEnd);
  const [disabled, setDisabled] = useState(true);
  const descending = data?.sort((a, b) => a.id - b.id);
  const ascending = data?.sort((a, b) => b.id - a.id);
  const paginated1 = ascending.slice(pageStart, pageEnd);
  const paginated2 = descending.slice(pageStart, pageEnd);
  const [sortCollections, setSortCollections] = useState(0)
  const nextPage = () => {
    setPageStart((prev) => prev + 12);
    setPageEnd((prev) => prev + 12);
    sessionStorage.setItem("pageStart", pageStart + 12);
    sessionStorage.setItem("pageEnd", pageEnd + 12);
  };
  const prevPage = () => {
    setPageStart((prev) => prev - 12);
    setPageEnd((prev) => prev - 12);
    sessionStorage.setItem("pageStart", pageStart - 12);
    sessionStorage.setItem("pageEnd", pageEnd - 12);
  };
  const sortItems = [
    t("collection.sort5"),
    t("collection.sort6"),
  ];
  const [collectionStatus, setCollectionStatus] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const items = activeCategory
  ? data?.filter((item) => item?.category === activeCategory)
  : paginated;
  const filterCategory = (item) => {
    sessionStorage.setItem("category", item);
    setActiveCategory(item);
  };
  const sortedItems = sortCollections === 2 ? paginated2 : sortCollections === 1 ? paginated1 : items
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    let value = e.target[0].value;
    sessionStorage.setItem("search", value);
    navigate("/search");
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header className="w-[100%] px-[20px] sm:px-[40px] py-[100px] md:flex-row flex-col flex gap-[30px] xl:gap-[50px]">
      <aside className="w-[100%] md:w-[300px] flex flex-col gap-[40px]">
        <form
          onSubmit={handleSearch}
          className="w-[100%] bg-gradient-to-r from-gray-200 to-gray-50 rounded-full p-[7px] flex justify-between items-center"
        >
          <input
            type="text"
            placeholder={searchPlaceholder}
            className="h-[45px] px-[20px] bg-transparent outline-none"
            onChange={() => setDisabled(false)}
          />
          <button
            disabled={disabled}
            type="submit"
            className="w-[45px] h-[45px] bg-orange-300 rounded-full text-white text-[20px] flex items-center justify-center"
          >
            <IoSearch />
          </button>
        </form>
        <div className="flex flex-col items-center gap-[40px]">
          <div className="flex justify-between w-[100%]">
            <h2>{title}</h2>
            <IoIosArrowForward
              onClick={() => setCollectionStatus(!collectionStatus)}
              className={
                collectionStatus
                  ? "rotate-[0deg] transition-all cursor-pointer"
                  : "cursor-pointer rotate-[90deg] transition-all"
              }
            />
          </div>
          <ul
            className={`${
              collectionStatus
                ? "h-[2px] overflow-hidden"
                : " overflow-visible h-[200px]"
            } transition-all flex flex-col gap-[10px] text-gray-500`}
          >
            <li onClick={()=>filterCategory("")} className=" cursor-pointer">{t("collection.collection4")}</li>
            {collections?.map((item, index) => (
              <li
                key={index}
                className=" cursor-pointer"
                onClick={() => filterCategory(item)}
              >
                {item}
              </li>
            ))}

          </ul>
        </div>
      </aside>
      <div className="flex flex-col gap-[40px]">
        <div className="w-[100%] flex justify-between flex-wrap gap-[20px] items-center">
          <h1 className="text-[30px] font-[700]">{title}</h1>
          <select
            className="global__btn bg-black text-white"
            onChange={(e) => setSortCollections(+e.target.value)}
          >
            {sortItems?.map((item, index) => (
              <option value={index} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[100%] grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] xl:gap-[40px]">
          {sortedItems?.map((item, index) => (
            <Link to={`/single_page/${item?.id}`} onClick={handleScrollToTop} key={index} className="cursor-pointer flex flex-col gap-[20px] group">
              <img
                src={item?.img}
                alt={item?.title}
                className="rounded-[20px] h-[320px] md:h-[200px] object-cover"
              />
              <h5 className="group-hover:text-orange-300 group-hover:font-[600] ease-in-out duration-300 text-[18px]">
                {item?.title}
              </h5>
            </Link>
          ))}
        </div>
        <div
          className={`${
            activeCategory ? "hidden" : ""
          } w-[200px] flex justify-between gap-[10px] items-center`}
        >
          <button
            disabled={pageStart === 0 ? true : false}
            onClick={prevPage}
            className="p-[10px] bg-orange-300 text-[20px] text-white"
          >
            <IoIosArrowBack />
          </button>
          <span className="text-[30px]">
            {pageStart === 0
              ? 1
              : pageStart === 12
              ? 2
              : pageStart === 24
              ? 3
              : pageStart === 36
              ? 4
              : 5}
          </span>
          <button
            disabled={paginated?.length < 12 ? true : false}
            onClick={nextPage}
            className="p-[10px] bg-orange-300 text-[20px] text-white"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </header>
  );
};

export default CollectionHeader;
