import React, { Component } from 'react';
import './Cart.scss';

import Button from '../../components/UI/Button/Button';
import CartItem from './CartItem/CartItem';
import OrderSummary from './OrderSummary/OrderSummary';
import ContactForm from './ContactForm/ContactForm';

class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        <h2 className="main-title">Shopping Cart</h2>
        <p className="main-info">You select <span className="bold">4</span> products.</p>
        <div className="content-wrapper">
          <ul className="cart-list">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <Button btnType="dark">Clear Cart</Button>
          </ul>
          <div className="checkout">
            <OrderSummary />
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;