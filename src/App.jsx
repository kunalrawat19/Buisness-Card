import './App.css';
import React from 'react';
import Home from './component/Home';
import {  Routes, Route } from 'react-router-dom'; 
import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react';
import CardPage from './component/CardPage';
function App() {
  const [cardData, setCardData] = useState({
    name: '',
    desc: '',
    interests: [],
    linkedin: '',
    twitter: ''
  });
  return (
  <div>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setCardData={setCardData}/>} />
        <Route path="/card" element={<CardPage cardData={cardData} />} />
      </Routes>
      </BrowserRouter>
   
  </div>
  )
}

export default App;

