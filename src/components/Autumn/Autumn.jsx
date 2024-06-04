import React from "react";
import { useTranslation } from "react-i18next";
import Quality from "../Quality/Quality";
import Collection from "../Collection/Collection";
import { DATA } from "../../lib/data";
import IMAGE from "../../assets/fall.png"
const Autumn = () => {
  const { t } = useTranslation();
  const title = t("autumn.title");
  const subtitle = t("autumn.subtitle");
  const data = DATA(t).filter((item) => item?.category === title);
  return (
    <section>
      <Quality image={IMAGE} bg="bg-gray-700" />
      <Collection title={title} subtitle={subtitle} data={data} />
    </section>
  );
};

export default Autumn;
