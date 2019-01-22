import React from 'react';
import './OrderSummary.scss';

import Button from '../../../components/UI/Button/Button';

const orderSummary = () => (
  <div className="order-summary">
    <h3 className="title">Order Summary</h3>
    <p className="info delivery-info">Free delivery below three products.</p>
    <div className="wrapper">
      <p className="subtitle">Total products price:</p>
      <p className="value">450.00 $</p>
    </div>
    <div className="wrapper">
      <p className="subtitle">Delivery:</p>
      <p className="value">40.00 $</p>
    </div>
    <p className="info promo-info">You pay less with the promo code. Sign Up or Sign In for more info.</p>
    <div className="wrapper">
      <p className="subtitle">Promo Code:</p>
      <input type="text" placeholder="Enter code" />
    </div>
    <div className="wrapper">
      <p className="subtitle">Saving (10%):</p>
      <p className="value">45.00 $</p>
    </div>
    <div className="wrapper">
      <p className="subtitle">Order total:</p>
      <p className="value">445.00 $</p>
    </div>
    <Button btnType="dark">To Payment</Button>
  </div>
);

export default orderSummary;