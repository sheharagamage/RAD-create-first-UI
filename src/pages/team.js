import React from 'react';
import './team.css';
import member1 from '../assests/member1.png';
import member2 from '../assests/member2.png';
import member3 from '../assests/member3.png';
import member4 from '../assests/member4.png';
import image from '../assests/BACK.png'

function Team() {
  return (
    <div className="team-page">
      <header className="team-header">
        <img src={image} alt="Header" className="header-image" />
        <h1>Our Team </h1>
      </header>
      <section className="team-intro">
        <h2>Meet Our Talented Team</h2>
        <p>We are proud to have a dedicated and skilled team of professionals who are passionate about interior renovation and design.</p>
      </section>
      <section className="team-members">
        <div className="team-member">
          <img src={member1} alt="Daniel Jack" />
          <h3>Daniel Jack</h3>
          <p>Designer</p>
        </div>
        <div className="team-member">
          <img src={member2} alt="Michael Henry" />
          <h3>Michael Henry</h3>
          <p>Architect</p>
        </div>
        <div className="team-member">
          <img src={member3} alt="Charlotte Luna" />
          <h3>Charlotte Luna</h3>
          <p>Designer</p>
        </div>
        <div className="team-member">
          <img src={member4} alt="Thomas Leo" />
          <h3>Thomas Leo</h3>
          <p>Architect</p>
        </div>
      </section>
    </div>
  );
}

export default Team;
