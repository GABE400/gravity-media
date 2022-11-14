import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Gallery from './routes/Gallery';
import Home from './routes/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
