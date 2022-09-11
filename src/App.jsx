import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ActiveKurs from "./Pages/activeKurs/activeKurs";
import Offlinekurs from "./Pages/offlinekurs/offlinekurs";
import Kirish from "./Pages/Kirish/Kirish";
import Aloqa from "./Pages/Aloqa/Aloqa";



function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activekurs" element={<ActiveKurs />} />
        <Route path="/offlinekurs" element={<Offlinekurs />} />
        <Route path="/kirish" element={<Kirish />} />
        <Route path="/aloqa" element={<Aloqa/>}/>
      </Routes>
    </div>
  );
}

export default App;
