import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/AboutUs';

function App() {
  return (
    <Router>
    <Link to='/home' >Home</Link>
    <Link to='/Contact' >Contact</Link>
    <Link to='/AboutUs' >About Us</Link>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/AboutUs' element={<About />} />
      </Routes>

    </Router>
  );
}

export default App;
