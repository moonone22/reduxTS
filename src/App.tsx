import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviesDetail from './pages/MoviesDetail';
import LolDtail from './pages/LolDtail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/movies" element ={<Movies/>} />
        <Route path="/movies/:id" element ={<MoviesDetail/>} />
        <Route path="/loldetail/:id" element ={<LolDtail/>} />
      </Routes>
    </div>
  );
}

export default App;
