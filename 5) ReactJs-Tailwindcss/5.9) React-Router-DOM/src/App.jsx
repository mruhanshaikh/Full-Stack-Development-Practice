import React from 'react'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import {About,Blogs,Blog,Contact,HomePage,Products,Random,Details,All,NotFound} from "./pages"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/blog' element={<Blog/>}/>
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:random' element={<Random/>}/>
        <Route path='/products/:random/details' element={<Details/>}/>
        <Route path='/products/:random/details/:all' element={<All/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
