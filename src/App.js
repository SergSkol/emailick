import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Messages from './components/Messages';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Messages />} />
      <Route path="*" element={<p>Path is not resolved</p>} />
    </Routes>
  </BrowserRouter>
);

export default App;
