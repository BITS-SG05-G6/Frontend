import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import Test from './pages/Test';
import Transaction from './pages/Transaction';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Category from './pages/Category';
import StatisticPage from './pages/Statistic';
function App() {
  return (
    <Routes>
       <Route path="/" element={<LandingPage/>}></Route>
       <Route path="/test" element={<Test/>}></Route>
       <Route path="/transaction" element={<Transaction/>}></Route>
       <Route path="/login" element={<Login/>}></Route>

      {/* <Route path="/login" element={<Login />}></Route> */}
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/statistics" element={<StatisticPage/>}></Route>
      <Route path='/category' element={<Category/>}></Route>

  
    </Routes>
  );
}

export default App;
