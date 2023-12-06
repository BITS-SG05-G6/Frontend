import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import Test from './pages/Test';
import Transaction from './pages/Transaction';
import { SignUp } from "./pages/Signup";
import Login from './pages/Login';
import { Login2 } from './pages/Login2';

function App() {
  return (
    <Routes>
       <Route path="/" element={<LandingPage/>}></Route>
       <Route path="/test" element={<Test/>}></Route>
       <Route path="/transaction" element={<Transaction/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/login2" element={<Login2/>}></Route>

      {/* <Route path="/login" element={<Login />}></Route> */}
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
}

export default App;
