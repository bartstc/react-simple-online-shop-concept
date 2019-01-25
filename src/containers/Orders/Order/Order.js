import React from 'react';
import './Order.scss';

const order = (props) => {
  return (
    <li className="order-item">
      <ul className="order-products">
        {props.products.map(product => (
          <li key={product.id}>
            <p className="order-title"><span className="bold">Name: </span>{product.title}</p>
            <p className="order-title"><span className="bold">Size: </span>{product.size}</p>
            <p className="order-title"><span className="bold">Amount: </span>{product.amount}</p>
            <hr />
          </li>
        ))}
      </ul>
      <p className="order-price">Total Price: {props.price}.00 $</p>
    </li>
  );
};

export default order;