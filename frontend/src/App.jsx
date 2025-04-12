import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Home from './Pages/Home/Home';

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
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
