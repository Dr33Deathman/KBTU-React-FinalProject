import React from 'react';
import phone_icon from './phone_icon.svg';
import "./contacts.scss";

const Contacts = () => {
  return <div className="contacts">
    <div className="contacts__container">
      <h1>How to contact us?</h1>
      <div className="contacts__item">
        <img src={phone_icon} /> +77712345678 (Almaty office)
      </div>
      <div className="contacts__item">
        <img src={phone_icon} /> +77798765421 (Astana office)
      </div>
    </div>
  </div>
}

export default Contacts;