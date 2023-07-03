import React, { useEffect, useState, useRef } from "react";
import './App.css';
import Home from './components/molecules/Home/Home';
import ShowAllTrainers from './components/molecules/ShowAllTrainer/ShowAllTrainers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/atom/Navbar/Navbar';
import Login from './components/molecules/Login/Login';
import Register from './components/molecules/Register/Register';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  // const aboutSectionRef = useRef();
  // const trainerSectionRef = useRef();
  // const priceSectionRef = useRef();
  // const footerSectionRef = useRef();

  return (
    <div className="App">
      {location.pathname !== '/register' && location.pathname !== '/login' && location.pathname !== '/' ? <Navbar /> : ""}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showalltrainers" element={<ShowAllTrainers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;

