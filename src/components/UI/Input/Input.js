import React from 'react';
import './Input.scss';

const input = (props) => {
  const { invalid, shouldValidate, touched, elementType, elementConfig, value, changed, label } = props;

  let inputElement = null;
  const inputClasses = ["input"];

  if (invalid && shouldValidate && touched) {
    inputClasses.push("invalid");
  };

  switch (elementType) {

    case ('input'):
      inputElement = <input
        className={inputClasses.join(' ')}
        {...elementConfig}
        value={value}
        onChange={changed}
      />;
      break;
    case ('textarea'):
      inputElement = <textarea
        className={inputClasses.join(' ')}
        {...elementConfig}
        value={value}
        onChange={changed}
      />
      break;
    case ('select'):
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={value}
          onChange={changed}>
          {elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      )
      break;

    default:
      inputElement = <input
        className={inputClasses.join(' ')}
        {...elementConfig}
        value={value}
      />
  }

  return (
    <div className="input-wrapper">
      <label className="label">{label}</label>
      {inputElement}
    </div>
  );
};

export default input;