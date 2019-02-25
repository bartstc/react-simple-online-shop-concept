import React, { Component } from 'react';
import './Cart.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Redirect } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import PropTypes from 'prop-types';

import Button from '../../components/UI/Button/Button';
import OrderSummary from './OrderSummary/OrderSummary';
import ContactForm from './ContactForm/ContactForm';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';

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
    if (this.props.isAuth) {
      this.setState({
        orderSummaryAccepted: true
      });
    } else {
      this.props.history.push('/auth');
    };
  };

  render() {
    const { cartItems, clearCart, isAuth, purchased } = this.props;

    let selected = <p className="main-info">You select <span className="bold">{cartItems.length}</span> products.</p>
    if (cartItems.length === 1) selected = <p className="main-info">You select <span className="bold">1</span> product.</p>;

    let list;
    (cartItems.length === 0) ? list = <p className="main-info" style={{ marginTop: '20px', fontWeight: '500' }}>You do not have any products on the list yet.</p> :
      list = (
        <TransitionGroup component="ul" className="cart-list">
          {cartItems.map(item => {
            const { id, img, title, size, price, total, amount } = item;
            const { remove, handleProductAmount } = this.props;

            return (
              <CSSTransition key={id} classNames="fade" timeout={300}>
                <li className="cart-item">
                  <div className="img-wrapper">
                    <img className="cart-item-img" src={img} alt="product img" />
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
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      );

    return (
      <>
        <ScrollToTopOnMount />
        <div className="cart-container">
          <h2 className="main-title">Shopping Cart</h2>
          {selected}
          {cartItems.length > 0 &&
            <Button clicked={clearCart} btnType="dark">Clear Cart</Button>
          }
          <div className="content-wrapper">
            {list}
            <div className="checkout">
              {cartItems.length > 0 && <OrderSummary cartItems={cartItems} acceptOrder={this.acceptOrder} isAuth={isAuth} />}
              {cartItems.length > 0 && this.state.orderSummaryAccepted && <ContactForm />}
            </div>
          </div>
          {purchased && <Redirect to="/" />}
        </div>
      </>
    );
  }
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  purchased: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  remove: PropTypes.func.isRequired,
  handleProductAmount: PropTypes.func.isRequired,
  calculateOrder: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    cartItems: state.products.cart,
    purchased: state.order.purchased,
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(actions.removeCartItem(id)),
    handleProductAmount: (id, value) => dispatch(actions.handleProductAmount(id, value)),
    calculateOrder: () => dispatch(actions.calculateOrder()),
    clearCart: () => dispatch(actions.clearCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);