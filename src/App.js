import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import Test from './pages/Test';
import Transaction from './pages/Transaction';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Category from './pages/Category';
import Wallet from './pages/Wallet'

function App() {
  return (
    <Routes>
       <Route path="/" element={<LandingPage/>}></Route>
       <Route path="/test" element={<Test/>}></Route>
       <Route path="/transaction" element={<Transaction/>}></Route>
       <Route path="/transaction/:id" element={<Transaction/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/wallets" element={<Wallet/>}></Route>

      {/* <Route path="/login" element={<Login />}></Route> */}
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path='/category' element={<Category/>}></Route>

  
    </Routes>
  );
}

export default App;
