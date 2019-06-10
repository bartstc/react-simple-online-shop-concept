import React from 'react';
import './Button.scss';

const button = ({ disabled, clicked, btnType, children }) => (
  <button
    disabled={disabled}
    onClick={clicked}
    className={["btn", btnType].join(' ')}
  >
    {children}
  </button>
);

export default button;