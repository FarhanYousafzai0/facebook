import React from 'react';
import './global.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Home from './Pages/Home/Home';
import OTPVerificationPage from './Pages/Auth/OTPVerificationPage';
import ClimateCenter from './Pages/Home/ClimateCenter';
import CommentsModel from './Components/Home/Facebook-Feed/CommentsModel';
import AllStories from './Pages/Story/AllStories';
import Friends from './Pages/Freinds/Friends';
import 'react-loading-skeleton/dist/skeleton.css'
import CreateStory from './Pages/Story/CreateStory';
import ProfilePage from './Pages/Profile/ProfilePage';



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
      
          <Route path='/stories' element={<AllStories/>} />
          <Route path='/create-story' element={<CreateStory/>}  />
          <Route path='/friends' element={<Friends/>} />


           
{/* ProfilePage */}
          <Route path='/profile/:id' element={<ProfilePage/>} />
     
         


          </Route>
        </Routes>

      <Toaster/>
      </div>
    </Router>
  );
};

export default App;
