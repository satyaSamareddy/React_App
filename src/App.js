import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Card from './Components/CardSheet'
export default function App() {
  return (
    <div>
    <Router>
      <Routes>  
         <Route path="/" element={<Card />} /> 
          <Route path="Card" element={<Card />} /> 
       

      </Routes>
      </Router>
    </div>
  )
}
