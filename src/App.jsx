import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './css/App.css';

import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import MLégales from './pages/MLégales';
import Réalisations from './pages/Réalisations';


export default function App() {

  return(
    <div className="App">
      <Routes>
        <Route path='/' element={<Accueil/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/mlegales' element={<MLégales/>}></Route>
        <Route path='/realisations' element={<Réalisations/>}></Route>
      </Routes>
    </div>

  );
}


