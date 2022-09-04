import { useState } from 'react'
import { Routes , Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header/Header';
import Home from "./Pages/Home/Home";
import ActiveKurs from "./Pages/activeKurs/activeKurs";
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <div className="app">
      <Header/>


      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/activekurs' element={<ActiveKurs/>}/>


      </Routes>

      <Footer/>
    </div>
  )
}

export default App
