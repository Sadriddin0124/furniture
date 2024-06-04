import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import SinglePage from './pages/SinglePage/SinglePage'
import AboutUs from './pages/AboutUs/AboutUs'
import Contacts from './pages/Contacts/Contacts'
import Collection from './pages/Collection/Collection'
import SingleNews from './pages/SingleNews/SingleNews'
import { useEffect } from 'react'
import SearchPage from './pages/SearchPage/SearchPage'
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  useEffect(()=> {
    const url = window.location.href.split("/")[3]
    if (url !== "collection") {
      sessionStorage.removeItem("category")
    }
  },[])
  return (
    <div className='overflow-hidden'>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single_page/:id' element={<SinglePage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/single_news/:id' element={<SingleNews/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
    </div>
  )
}

export default App
