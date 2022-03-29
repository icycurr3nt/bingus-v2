import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route }  from "react-router-dom";
import './assets/css/index.css';
import App from './App.jsx';
import About from './About.jsx'
import Portfolio from './Portfolio.jsx';
import Home from './Home.jsx'
import Pokedex from './Pokedex.jsx'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="pokedex" element={<Pokedex/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
