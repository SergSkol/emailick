import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Books from './components/BookContainer';
import Categories from './components/Categories';
import VercelToolbar from './components/VercelToolbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/toolbar" element={<VercelToolbar />} />
      <Route path="*" element={<p>Path is not resolved</p>} />
    </Routes>
    <SpeedInsights />
  </BrowserRouter>
);

export default App;
