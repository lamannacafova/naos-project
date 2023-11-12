import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Home from '../pages/home/Home'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default AppRouter
