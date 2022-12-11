import React from 'react';

import Header from './layout/Header';
import MainPage from './pages/MainPage';
import DesignPage from './pages/DesignPage';
import PosterPage from './pages/PosterPage';
import PosterFormPage from './pages/PosterFormPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter className="sectionWrapper">
        <Header />

        <Routes className="main-content">
          <Route path="/" element={<MainPage />} />
          <Route path="/posterForm" element={<PosterFormPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/poster" element={<PosterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
