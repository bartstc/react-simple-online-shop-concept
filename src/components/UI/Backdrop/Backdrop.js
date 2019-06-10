import React from 'react';
import './Backdrop.scss';

const backdrop = ({ show, clicked }) => (
  show ? <div onClick={clicked} className="Backdrop"></div> : null
);

export default backdrop;