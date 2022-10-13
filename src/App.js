import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './component/Home.js';
import Buy from './component/Buy.js';
import About from './component/About.js';
import Account from './component/Account.js';
import Signup from './component/Signup.js';
import Reset from './component/Reset.js';
import Navbar from './component/Navbar';
import PusatBantuan from './component/PusatBantuan';
import Event from './component/Event';
import Tiket from './component/Tiket'
import Footer from './component/Footer';


function App() {
  return (
    <BrowserRouter basename='/tiketevent'>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='buy' element={<Buy />} />
        <Route path='/about' element={<About />} />
        <Route path='/pusat-bantuan' element={<PusatBantuan />} />
        <Route path='/account' element={<Account />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/event' element={<Event />} />
        <Route path='/event/tiket' element={<Tiket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
