import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbaar from "./Componets/Navbaar";
import HomePage from "./Pages/Home";
import ClientsSection from "./Pages/ClientsSection";
import ServicesCards from "./Pages/ServicesCards";

function App() {
  return (
    <Router>
      <Navbaar />

      <Routes>
        
        <Route path="/" element={<HomePage />} />
         <Route path="/servicesCards" element={< ServicesCards/>} />
         <Route path="/main" element={<ClientsSection />} />
      </Routes>
    </Router>
  );
}

export default App;


