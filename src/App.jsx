import { useState } from 'react'
import { Routes , Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/Home";
import ActiveKurs from "./Pages/activeKurs/activeKurs";
import Offlinekurs from './Pages/offlinekurs/offlinekurs';


function App() {

  return (
    <div className="app">


      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/activekurs' element={<ActiveKurs/>}/>
      <Route path='/offlinekurs' element={<Offlinekurs/>}/>


      </Routes>


    </div>
  )
}

export default App
