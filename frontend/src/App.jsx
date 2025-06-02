import React from 'react';
import './global.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';
import Home from './Pages/Home/Home';
import OTPVerificationPage from './Pages/Auth/OTPVerificationPage';
import ClimateCenter from './Pages/Home/ClimateCenter';
import AllStories from './Pages/Story/AllStories';
import Friends from './Pages/Freinds/Friends';
import 'react-loading-skeleton/dist/skeleton.css';
import CreateStory from './Pages/Story/CreateStory';
import ProfilePage from './Pages/Profile/ProfilePage';
import VideoCallZego from './Pages/VedioChat/Vedio';
import ProtectedRoute from './Components/Home/Error/ProtectRoutes';
import NotFoundPage from './Components/Home/Error/NotFoundPage';
import Marketplace from './Pages/MarketPlace/Marketplace';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTPVerificationPage />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/climatecenterinfo"
          element={
            <ProtectedRoute>
              <ClimateCenter />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stories"
          element={
            <ProtectedRoute>
              <AllStories />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-story"
          element={
            <ProtectedRoute>
              <CreateStory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/friends"
          element={
            <ProtectedRoute>
              <Friends />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/video-call/:senderId/:receiverId"
          element={
            <ProtectedRoute>
              <VideoCallZego />
            </ProtectedRoute>
          }
        />

        <Route
          path="/market"
          element={
            <ProtectedRoute>
             <Marketplace/>
            </ProtectedRoute>
          }
        />




        {/* 404 Fallback */}
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>

      <Toaster />
    </Router>
  );
};

export default App;
