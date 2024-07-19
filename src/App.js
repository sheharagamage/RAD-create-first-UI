import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/ContactUs';
import Team from './pages/team'; 
import Competition from './pages/Competition'; 
import Internship from './pages/Internship'; 
import PartTimeJob from './pages/PartTimeJob'; 
import Mission from './pages/Mission'; 
import Vision from './pages/Vision'; 
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/competition" element={<Competition />} /> 
          <Route path="/internship" element={<Internship />} />
          <Route path="/parttime-job" element={<PartTimeJob />} /> 
          <Route path="/mission" element={<Mission />} /> 
          <Route path="/vision" element={<Vision />} /> 
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
