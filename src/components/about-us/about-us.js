import React from 'react';
import human_icon from './human-icon.svg';
import "./about-us.scss";


const AboutUs = () => {
  return <div className="about">
    <div className="about__container">
      <h1>About Us</h1>
      <div className="about__item">
        <img src={human_icon} />
        Kamran <br/> Akhmedov
      </div>
      <div className="about__item">
        <img src={human_icon} />
        Daniil <br/> Koilybayev
      </div>
    </div>
  </div>
}

export default AboutUs;