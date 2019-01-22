import React from 'react';
import './CartItem.scss';

import Button from '../../../components/UI/Button/Button';

import testImg from '../../../assets/test.png';

const cartItem = () => (
  <li className="cart-item">
    <div className="img-wrapper">
      <img className="cart-item-img" src={testImg} alt="" />
    </div>
    <div className="cart-item-content">
      <h3 className="name">Womens coat one</h3>
      <p className="value">Size: 36</p>
      <p className="value">Quantity:</p>
      <div className="button-wrapper">
        <button className="size-btn">-</button>
        <button className="size-btn">1</button>
        <button className="size-btn">+</button>
      </div>
      <p className="value">Price: 240.00 $</p>
      <p className="value">Total: 240.00 $</p>
      <Button btnType="small">Remove</Button>
    </div>
  </li>
);

export default cartItem;