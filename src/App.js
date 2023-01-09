import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Form/Login';
import Layout from './Components/Dashboard/Layout';
import Newuser from './Components/Form/Newuser';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Newuser />} />
      <Route path='/dashboard' element={<Layout />} />
    </Routes>



  )
}

export default App