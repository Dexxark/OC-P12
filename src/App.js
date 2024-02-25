import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Aboutpage from './pages/Aboutpage';
import Housing from './pages/Housing';
import Page404 from './pages/Page404';

const App = () => {
    return (
       <BrowserRouter>
        <Routes>
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/:id" element={<Housing />} />
        <Route path='/Page404' element={<Page404 />} />
        <Route path="/" element={<Home />} />
        </Routes>
       </BrowserRouter>
    );
};

export default App;