import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
const App = () => {
  
  return (
    <>
    <div className='relative'>
    <Router>
        <Routes>
            <Route path='/' element={<Login/>} />
        </Routes>
    </Router>
    </div>
    </>
  )
}

export default App
