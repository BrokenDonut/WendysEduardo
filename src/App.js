import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Login } from './pages/Login/Login';
import { Register } from './pages/register/Register';
import { Productos } from './pages/productos/Productos';
import { Pagar } from './pages/pagar/Pagar';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/productos' element={<Productos></Productos>}></Route>
        <Route path='/pagar' element={<Pagar></Pagar>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;

