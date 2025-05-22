import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/Style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import HargaPage from './components/HargaPage'; // pastikan path-nya benar
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/harga" element={<HargaPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
