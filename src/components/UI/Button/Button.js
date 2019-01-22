import React from 'react';
import './Button.scss';

const button = (props) => (
  <button
    disabled={props.disabled}
    onClick={props.clicked}
    className={["btn", props.btnType].join(' ')}
  >
    {props.children}
  </button>
);

export default button;