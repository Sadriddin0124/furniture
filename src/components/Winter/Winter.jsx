import React from 'react'
import WinterImg from "../../assets/quality.png"
import Quality from '../Quality/Quality'
import { useTranslation } from 'react-i18next'
import Collection from '../Collection/Collection'
import { DATA } from '../../lib/data'
const Winter = () => {
    const {t} = useTranslation()
    const title = t("winter.title")
    const subtitle = t("winter.subtitle")
    const data = DATA(t).filter(item=> item?.category === "Winter Collection")
  return (
    <section>
      <Quality image={WinterImg} bg="bg-slate-600"/>
      <Collection title={title} subtitle={subtitle} data={data}/>
    </section>
  )
}

export default Winter
