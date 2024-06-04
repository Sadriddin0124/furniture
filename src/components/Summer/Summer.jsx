import React from 'react'
import { useTranslation } from 'react-i18next'
import Quality from '../Quality/Quality'
import Collection from '../Collection/Collection'
import SummerImg from "../../assets/summer.png"
import { DATA } from '../../lib/data'
const Summer = () => {
    const {t} = useTranslation()
    const title = t("summer.title")
    const subtitle = t("summer.subtitle")
    const data = DATA(t).filter(item=> item?.category === "Summer Collection")
  return (
    <section className=''>
      <Quality image={SummerImg} bg="bg-green-700"/>
      <Collection title={title} subtitle={subtitle} data={data}/>
    </section>
  )
}

export default Summer
