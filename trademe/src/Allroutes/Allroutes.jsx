import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from '../Component/Navbar';
import CachedItem from '../Pages/CachedItem';
import HomePage from '../Pages/HomePage'
import Product from '../Pages/Product';
import Search from '../Pages/Search';


const AllRoute = () => {
  return (
    <>
    <Navbar/>
    <Routes>   
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cached" element={<CachedItem/>}/>
        <Route path="/search" element={<Search/>}/>
    </Routes>
    </>
  )
}

export default AllRoute;