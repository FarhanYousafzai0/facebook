import React from 'react';
import './global.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Home from './Pages/Home/Home';
import OTPVerificationPage from './Pages/Auth/OTPVerificationPage';
import ClimateCenter from './Pages/Home/ClimateCenter';

const App = () => {
  return (
    <Router>
      <div className='relative'>
        <Routes>

{/* Home */}

<Route  path='/home' element={<Home/>} />



          {/* Authentication Routes */}
          <Route path='/'>
            <Route path='register' element={<Register />} /> {/* Removed the leading `/` */}
            <Route path='' element={<Login />} />
          <Route path='/otp' element={<OTPVerificationPage/>} />
          <Route path='/climatecenterinfo' element={<ClimateCenter/>} />
          </Route>
        </Routes>

      <Toaster/>
      </div>
    </Router>
  );
};

export default App;
