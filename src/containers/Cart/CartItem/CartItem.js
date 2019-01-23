import React from 'react';
import './CartItem.scss';

import Button from '../../../components/UI/Button/Button';

const cartItem = (props) => {
  const { img, title, size, price, total } = props.item;

  return (
    <li className="cart-item">
      <div className="img-wrapper">
        <img className="cart-item-img" src={img} alt="" />
      </div>
      <div className="cart-item-content">
        <h3 className="name">{title}</h3>
        <p className="value">Size: {size}</p>
        <p className="value">Quantity:</p>
        <div className="button-wrapper">
          <button className="size-btn">-</button>
          <button className="size-btn">1</button>
          <button className="size-btn">+</button>
        </div>
        <p className="value">Price: {price}.00 $</p>
        <p className="value">Total: {total}.00 $</p>
        <Button btnType="small">Remove</Button>
      </div>
    </li>
  )
};

export default cartItem;