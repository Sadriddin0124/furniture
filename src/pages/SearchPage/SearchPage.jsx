import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Collection from '../../components/Collection/Collection'
import { useTranslation } from 'react-i18next'
import { DATA } from '../../lib/data'

const SearchPage = () => {
    const {t} = useTranslation()
    const data = DATA(t)
    const [searchData, setSearchData] = useState([])
    useEffect(()=> {
        const searchValue = sessionStorage.getItem("search")
        const filter = data?.filter(item=> item?.title?.toLowerCase().includes(searchValue?.toLowerCase()))
        setSearchData(filter);
    },[])
  return (
    <div>
      <Navbar/>
      <Collection data={searchData}/>
      <Footer/>
    </div>
  )
}

export default SearchPage
