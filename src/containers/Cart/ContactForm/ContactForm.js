import React from 'react';
import './ContactForm.scss';

const contactForm = () => (
  <form className="contact-form">
    <h3 className="title">Your Contact Data</h3>
    <div className="input-wrapper">
      <label className="label" htmlFor=""></label>
      <input className="input" type="text" placeholder="Placeholder ..." />
    </div>
    <div className="input-wrapper">
      <label className="label" htmlFor=""></label>
      <input className="input" type="text" placeholder="Placeholder ..." />
    </div>
    <div className="input-wrapper">
      <label className="label" htmlFor=""></label>
      <input className="input" type="text" placeholder="Placeholder ..." />
    </div>
    <div className="input-wrapper">
      <label className="label" htmlFor=""></label>
      <input className="input" type="text" placeholder="Placeholder ..." />
    </div>
    <div className="input-wrapper">
      <label className="label" htmlFor=""></label>
      <input className="input" type="text" placeholder="Placeholder ..." />
    </div>
    <div className="input-wrapper">
      <label className="label" htmlFor=""></label>
      <select className="select-input">
        <option value="fastest">Fastest</option>
        <option value="price - low to high">Cheapest</option>
      </select>
    </div>
  </form>
);

export default contactForm;