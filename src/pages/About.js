import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './About.css';
import TeamPhoto from '../assests/about.jpg';

const Team = () => <div>Meet our team</div>;
const mission = () => <div>Our Mission</div>;
const vision = () => <div>Our Vission</div>;


const About = () => (
  <div>
    <h1 className='title1'>About Us</h1>

    <div className="about-content">
      <div className="team-photo-container">
        <img src={TeamPhoto} alt="Team" className="team-photo" />
      </div>

      <div className="about-text">
        <h2 className='title2'>Introduction</h2>
        <p>UniQuest is a new web application designed to improve how university students find part-time jobs, internships, and competitions. It offers easy-to-use features to make finding these opportunities more efficient, reliable, and convenient. By putting all the information in one place and making the process simpler, UniQuest helps both students and organizations. As university students ourselves, we created this project because we know from experience the common problems students face when looking for these opportunities.</p>
      </div>
    </div>

    <div className="unique-factors">
      <Link to="team" className="unique-factor-box">our team</Link>
      <Link to="/vision" className="unique-factor-box">Our vision</Link>
      <Link to="/mission" className="unique-factor-box">Our mission</Link>
    </div>

    <Routes>
      <Route path="team" element={<Team />} />
      <Route path="/vision" element={<vission />} />
      <Route path="/mission" element= {<mission />} />
     
    </Routes>
  </div>
);

export default About;
