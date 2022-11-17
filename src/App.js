import React from 'react';

import Header from './layout/Header'
import Footer from './layout/Footer'
import MainPage from './pages/MainPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter className="sectionWrapper">
        <Header />

        <Routes className="main-content">
          <Route path='/' element={<MainPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
