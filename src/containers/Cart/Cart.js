import React, { Component } from 'react';
import './Cart.scss';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import CartItem from './CartItem/CartItem';
import OrderSummary from './OrderSummary/OrderSummary';
import ContactForm from './ContactForm/ContactForm';

class Cart extends Component {
  render() {
    let selected = <p className="main-info">You select <span className="bold">{this.props.cartItems.length}</span> products.</p>
    if (this.props.cartItems.length === 1) selected = <p className="main-info">You select <span className="bold">1</span> product.</p>;

    return (
      <div className="cart-container">
        <h2 className="main-title">Shopping Cart</h2>
        {selected}
        <div className="content-wrapper">
          <ul className="cart-list">
            {this.props.cartItems.map(item => (
              <CartItem item={item} />
            ))}
            {this.props.cartItems.length > 0 &&
              <Button btnType="dark">Clear Cart</Button>
            }
          </ul>
          <div className="checkout">
            {this.props.cartItems.length > 0 &&
              <OrderSummary />
            }
            {/* <ContactForm /> */}
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    cartItems: state.products.cart
  }
};

export default connect(mapStateToProps)(Cart);