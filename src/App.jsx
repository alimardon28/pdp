import { useState } from 'react'
import { Routes , Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/Home";
import ActiveKurs from "./Pages/activeKurs/activeKurs";


function App() {

  return (
    <div className="app">


      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/activekurs' element={<ActiveKurs/>}/>


      </Routes>


    </div>
  )
}

export default App
