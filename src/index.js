import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Detail from './inc/detail.js';
import Community from './inc/community.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
            <Route path='/' element={<App />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/community' element={<Community />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();