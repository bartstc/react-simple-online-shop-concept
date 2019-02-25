import React from 'react';
import './Contact.scss';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';

const contact = () => (
  <>
    <ScrollToTopOnMount />
    <div className="contact-container">
      <h2 className="main-title">Contact</h2>
      <p className="main-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ligula neque, at faucibus metus rutrum sed. Fusce interdum at est eget aliquet. Suspendisse potenti. Curabitur ac luctus magna.  Donec eleifend ligula neque, at faucibus metus rutrum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h3 className="title">Phone number:</h3>
      <p>555-444-333 (free connection)</p>
      <h3 className="title">Work hours:</h3>
      <p>Monday - Friday: 9.00 - 20.00</p>
      <p>Saturday - SUnday: 10.00 - 16.00</p>
    </div>
  </>
);

export default contact;