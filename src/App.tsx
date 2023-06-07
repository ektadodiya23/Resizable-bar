import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Resizebox from './Component/Resizebox';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resizebox />} />
          <Route path="*" element={<Resizebox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
