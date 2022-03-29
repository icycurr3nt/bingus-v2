import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route }  from "react-router-dom";
import './assets/css/index.css';
import App from './App.jsx';
import About from './static_pages/About.jsx'
import Portfolio from './static_pages/Portfolio.jsx';
import Home from './static_pages/Home.jsx'
import Pokedex from './Pokedex.jsx'
import Pokemon from './Pokemon.jsx'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="pokedex" element={<Pokedex/>}/>
        <Route path="pokemon/:pokemonId" element={<Pokemon/>} />
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
