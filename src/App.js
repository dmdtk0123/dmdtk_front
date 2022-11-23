import React from 'react';

import Header from './layout/Header'
import Footer from './layout/Footer'
import MainPage from './pages/MainPage'
import PosterInputPage from './pages/PosterInputPage'
import DesignPage from './pages/DesignPage'
import PosterPage from './pages/PosterPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter className="sectionWrapper">
        <Header />

        <Routes className="main-content">
          <Route path='/' element={<MainPage />} />
          <Route path='/start' element={<PosterInputPage />} />
          <Route path='/design' element={<DesignPage />} />
          <Route path='/poster' element={<PosterPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
