import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Auth/Register';

const App = () => {
  return (
    <Router>
      <div className='relative'>
        <Routes>
          {/* Authentication Routes */}
          <Route path='/user'>
            <Route path='register' element={<Register />} /> {/* Removed the leading `/` */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
