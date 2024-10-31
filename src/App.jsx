import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/navbar'
import AboutPage from "./Components/AboutPage";
import SpeciesPage from "./Components/SpeciesPage";
import RequestPage from './Components/RequestPage';
import HomePage from './Components/Home'

function App() {
  
  return (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/species" element={<SpeciesPage />} />
        <Route path="/request" element={<RequestPage />} /> {/* Add Request route */}
      </Routes>
    </Router>
  </>
  )
}

export default App
