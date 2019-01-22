import React from 'react';
import './FakeForm.scss';

const fakeForm = () => (
  <form className="questions-form">
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Email" />
    <textarea placeholder="Message"></textarea>
    <button>Send</button>
  </form>
);

export default fakeForm;