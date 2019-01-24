import React, { Component } from 'react';
import './Cart.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Button from '../../components/UI/Button/Button';
import OrderSummary from './OrderSummary/OrderSummary';
import ContactForm from './ContactForm/ContactForm';

class Cart extends Component {
  state = {
    orderSummaryAccepted: false
  };

  componentDidMount() {
    this.props.calculateOrder();
  };

  componentDidUpdate() {
    this.props.calculateOrder();
  };

  acceptOrder = () => {
    this.setState({
      orderSummaryAccepted: true
    })
  };

  render() {
    const { cartItems } = this.props;

    let selected = <p className="main-info">You select <span className="bold">{cartItems.length}</span> products.</p>
    if (cartItems.length === 1) selected = <p className="main-info">You select <span className="bold">1</span> product.</p>;

    return (
      <div className="cart-container">
        <h2 className="main-title">Shopping Cart</h2>
        {selected}
        <div className="content-wrapper">
          <ul className="cart-list">
            {cartItems.map(item => {
              const { id, img, title, size, price, total, amount } = item;
              const { remove, handleProductAmount } = this.props;

              return (
                <li key={id} className="cart-item">
                  <div className="img-wrapper">
                    <img className="cart-item-img" src={img} alt="" />
                  </div>
                  <div className="cart-item-content">
                    <h3 className="name">{title}</h3>
                    <p className="value">Size: {size}</p>
                    <p className="value">Quantity:</p>
                    <div className="button-wrapper">
                      <button disabled={amount === 1} onClick={() => handleProductAmount(id, 'decrement')} className="size">-</button>
                      <span className="size">{amount}</span>
                      <button onClick={() => handleProductAmount(id, 'increment')} className="size">+</button>
                    </div>
                    <p className="value">Price: {price}.00 $</p>
                    <p className="value">Total: {total}.00 $</p>
                    <Button clicked={() => remove(id)} btnType="small">Remove</Button>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="checkout">
            {cartItems.length > 0 && <OrderSummary cartItems={cartItems} acceptOrder={this.acceptOrder} />}
            {this.state.orderSummaryAccepted && <ContactForm />}
          </div>
        </div>
        {cartItems.length > 0 &&
          <Button clicked={this.props.clearCart} btnType="dark">Clear Cart</Button>
        }
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    cartItems: state.products.cart
  }
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(actions.removeCartItem(id)),
    handleProductAmount: (id, value) => dispatch(actions.handleProductAmount(id, value)),
    calculateOrder: () => dispatch(actions.calculateOrder()),
    clearCart: () => dispatch(actions.clearCart())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);