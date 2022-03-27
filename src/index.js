import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import './index.css';
import App from './App.jsx';
import About from './About.jsx'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About/>} />
        <Route path="portfolio" element={<App/>} />
        <Route path="pokedex" element={<App/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
