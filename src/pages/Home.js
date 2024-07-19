import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [message, setMessage] = useState('Welcome to UniQuest!');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [currentTime, setCurrentTime] = useState(''); 

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setCurrentTime(`${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
    };

    const updateGreeting = () => {
      const hours = new Date().getHours();
      const timeOfDayMessage =
        hours < 12 ? 'Good morning!' : hours < 18 ? 'Good afternoon!' : 'Good evening!';
      setTimeOfDay(timeOfDayMessage);
    };

   
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    
    updateTime();
    updateGreeting();

   
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.title = message;
  }, [message]);

  return (

      <div className="home-container">
      <h1>{timeOfDay}</h1>
      <p>{message}</p>
      <div className="clock">
        Current Time: {currentTime}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className='extra-content'>
        <section>
          <h2>Discover More Opportunities</h2>
          <p>Explore a wide range of part-time jobs, internships, and competitions tailored to your skills and interests. UniQuest brings everything together in one place, making it easier for you to find the perfect opportunity.</p>
        </section>
        <section>
        <Link to='/competitions' className='common-hover'><h1>Join Competitions</h1></Link>
          <p>Participate in exciting competitions and showcase your talents. UniQuest offers a platform for you to engage with various competitions, from hackathons to drama contests, helping you gain valuable experience and recognition.</p>
        </section>
        <section>
        <Link to='/internships' className='common-hover'><h1>Internship Opportunities</h1></Link>
          <p>Gain practical experience through internships offered by top companies. UniQuest connects you with employers looking for enthusiastic and skilled interns, providing a bridge between academic knowledge and real-world application.</p>
        </section>
        <section>
        <Link to='/parttimejobs' className='common-hover'><h1>Part-Time Jobs</h1></Link>
          <p>Find flexible part-time jobs that fit your schedule and help you earn while you learn. UniQuest lists numerous part-time job opportunities that you can easily apply for, ensuring you can balance work and studies effectively.</p>
        </section>
      </div>

    </div>
   
   


  );
};

export default Home;