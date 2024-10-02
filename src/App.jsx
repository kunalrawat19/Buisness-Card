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
    interest: [],
    linkedin: '',
    twitter: ''
  });
  return (
  <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  h-screen overflow-auto'>
     
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

