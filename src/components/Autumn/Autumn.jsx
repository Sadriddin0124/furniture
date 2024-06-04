import React from "react";
import { useTranslation } from "react-i18next";
import Quality from "../Quality/Quality";
import Collection from "../Collection/Collection";
import AutumnImg from "../../assets/autumn.png";
import { DATA } from "../../lib/data";
const Autumn = () => {
  const { t } = useTranslation();
  const title = t("autumn.title");
  const subtitle = t("autumn.subtitle");
  const data = DATA(t).filter((item) => item?.category === "Autumn Collection");
  return (
    <section className="">
      <Quality image={AutumnImg} bg=" bg-gray-700" />
      <Collection title={title} subtitle={subtitle} data={data} />
    </section>
  );
};

export default Autumn;
