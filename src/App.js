import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
