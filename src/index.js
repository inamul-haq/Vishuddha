import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnlineClass from './pages/OnlineClass';
import ContactUsPage from './pages/ContactUsPage';
import Subjects from './pages/Subjects';
import OfflineClass from './pages/OfflineClass';
import Courses from './pages/Courses';
import YogaPage from './pages/YogaPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/contactus" element={<ContactUsPage />}></Route>
    <Route path="/subjects" element={<Subjects />}></Route>
    <Route path="/onlineclasses" element={<OnlineClass />}></Route>
    <Route path="/offlineclasses" element={<OfflineClass />}></Route>
    <Route path="/yoga" element={<YogaPage />}></Route>
    <Route path="/courses" element={<Courses />}></Route>
  </Routes>
</BrowserRouter>
);


