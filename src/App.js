import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import Test from './pages/Test';

function App() {
  return (
    <Routes>
       <Route path="/" element={<LandingPage/>}></Route>
       <Route path="/test" element={<Test/>}></Route>
    </Routes>
     
  );
}

export default App;
