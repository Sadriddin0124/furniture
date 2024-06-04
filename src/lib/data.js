import { useTranslation } from "react-i18next";
import Summer1 from "../assets/summer1.jpg";
import Summer2 from "../assets/summer2.jpg";
import Summer3 from "../assets/summer3.jpg";
import Summer4 from "../assets/summer4.jpg";
import Summer5 from "../assets/summer5.jpg";
import Summer6 from "../assets/summer6.jpg";
import Summer7 from "../assets/summer7.jpg";
import Summer8 from "../assets/summer8.jpg";
import Summer9 from "../assets/summer9.jpg";
import Summer10 from "../assets/summer10.jpg";
import Winter1 from "../assets/winter1.jpg";
import Winter2 from "../assets/winter2.jpg";
import Winter3 from "../assets/winter3.jpg";
import Winter4 from "../assets/winter4.jpg";
import Winter5 from "../assets/winter5.jpg";
import Winter6 from "../assets/winter6.jpg";
import Winter7 from "../assets/winter7.jpg";
import Winter8 from "../assets/winter8.jpg";
import Winter9 from "../assets/winter9.jpg";
import Winter10 from "../assets/winter10.jpg";
import Autumn1 from "../assets/autumn1.jpg";
import Autumn2 from "../assets/autumn2.jpg";
import Autumn3 from "../assets/autumn3.jpg";
import Autumn4 from "../assets/autumn4.jpg";
import Autumn5 from "../assets/autumn5.jpg";
import Autumn6 from "../assets/autumn6.jpg";
import Autumn7 from "../assets/autumn7.jpg";
import Autumn8 from "../assets/autumn8.jpg";
import Autumn9 from "../assets/autumn9.jpg";
import Autumn10 from "../assets/autumn10.jpg";
import News1 from "../assets/news1.png"
import News2 from "../assets/news2.png"
import News3 from "../assets/news3.png"
import About1 from "../assets/about1.webp"
import About2 from "../assets/about2.jpg"
import About3 from "../assets/about3.jpg"

export const DATA = (t) => {
  return [
    {id: 1, title: t("summer.item1"), img: Summer1, category: t("summer.title") },
    {id: 2, title: t("summer.item2"), img: Summer2, category: t("summer.title") },
    {id: 3, title: t("summer.item3"), img: Summer3, category: t("summer.title") },
    {id: 4, title: t("summer.item4"), img: Summer4, category: t("summer.title") },
    {id: 5, title: t("summer.item5"), img: Summer5, category: t("summer.title") },
    {id: 6, title: t("summer.item6"), img: Summer6, category: t("summer.title") },
    {id: 7, title: t("summer.item7"), img: Summer7, category: t("summer.title") },
    {id: 8, title: t("summer.item8"), img: Summer8, category: t("summer.title") },
    {id: 9, title: t("summer.item9"), img: Summer9, category: t("summer.title") },
    {id: 10, title: t("summer.item10"), img: Summer10, category: t("summer.title") },
    {id: 11, title: t("autumn.item1"), img: Autumn1, category: t("autumn.title") },
    {id: 12, title: t("autumn.item2"), img: Autumn2, category: t("autumn.title") },
    {id: 13, title: t("autumn.item3"), img: Autumn3, category: t("autumn.title") },
    {id: 14, title: t("autumn.item4"), img: Autumn4, category: t("autumn.title") },
    {id: 15, title: t("autumn.item5"), img: Autumn5, category: t("autumn.title") },
    {id: 16, title: t("autumn.item6"), img: Autumn6, category: t("autumn.title") },
    {id: 17, title: t("autumn.item7"), img: Autumn7, category: t("autumn.title") },
    {id: 18, title: t("autumn.item8"), img: Autumn8, category: t("autumn.title") },
    {id: 19, title: t("autumn.item9"), img: Autumn9, category: t("autumn.title") },
    {id: 20, title: t("autumn.item10"), img: Autumn10, category: t("autumn.title") },
    {id: 21, title: t("winter.item1"), img: Winter1, category: t("winter.title") },
    {id: 22, title: t("winter.item2"), img: Winter2, category: t("winter.title") },
    {id: 23, title: t("winter.item3"), img: Winter3, category: t("winter.title") },
    {id: 24, title: t("winter.item4"), img: Winter4, category: t("winter.title") },
    {id: 25, title: t("winter.item5"), img: Winter5, category: t("winter.title") },
    {id: 26, title: t("winter.item6"), img: Winter6, category: t("winter.title") },
    {id: 27, title: t("winter.item7"), img: Winter7, category: t("winter.title") },
    {id: 28, title: t("winter.item8"), img: Winter8, category: t("winter.title") },
    {id: 29, title: t("winter.item9"), img: Winter9, category: t("winter.title") },
    {id: 30, title: t("winter.item10"), img: Winter10, category: t("winter.title") },
  ]
}

export const TableData = (t) => {
    return [
        {key: t("singlePage.key1"), value: t("singlePage.value1")},
        {key: t("singlePage.key2"), value: t("singlePage.value2")},
        {key: t("singlePage.key3"), value: t("singlePage.value3")},
        {key: t("singlePage.key4"), value: t("singlePage.value4")},
        {key: t("singlePage.key5"), value: t("singlePage.value5")},
        {key: t("singlePage.key6"), value: t("singlePage.value6")},
    ]
}

export const NewsData = (t) => {
  return [
    {
      id: 1,
      img: News1,
      top1: t("news.top1"),
      top2: t("news.top2"),
      title: t("news.heading"),
      desc: t("news.desc"),
    },
    {
      id: 2,
      img: News2,
      top1: t("news.top1"),
      top2: t("news.top2"),
      title: t("news.heading"),
      desc: t("news.desc"),
    },
    {
      id: 3,
      img: News3,
      top1: t("news.top1"),
      top2: t("news.top2"),
      title: t("news.heading"),
      desc: t("news.desc"),
    }
  ]
}

export const Links = (t) => {
  return [
    { path: "/", text: t("navbar.item1") },
    { path: "/collection", text: t("navbar.item2") },
    { path: "/about", text: t("navbar.item3") },
    { path: "/contacts", text: t("navbar.item4") },
  ];
}

export const About = (t) => {
  return [
    {img: About1, text: t("about.desc1")},
    {img: About2, text: t("about.desc2")},
    {img: About3, text: t("about.desc3")},
  ]
}
