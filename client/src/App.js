import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './screens/Homepage';
import HomeScreen from './screens/HomeScreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import AdminOrderScreen from './screens/AdminOrders';
import ProfilerScreen from './screens/ProfilerScreen';
import FAQScreen from './screens/FaqScreen';

function App() {
    return (
        <div className='App' >
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<HomeScreen />} />
                    <Route path="/food" element={<Homepage />} />
                    <Route path="/cart" element={<Cartscreen />} />
                    <Route path="/login" element={<Loginscreen />} />
                    <Route path="/register" element={<Registerscreen />} />
                    <Route path="/orders" element={<AdminOrderScreen />} />
                    <Route path="/profile" element={<ProfilerScreen />} />
                    <Route path="/faq" element={<FAQScreen />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
