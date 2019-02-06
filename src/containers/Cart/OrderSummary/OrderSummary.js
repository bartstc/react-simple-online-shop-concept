import React, { Component } from 'react';
import './OrderSummary.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../../../components/UI/Button/Button';

class OrderSummary extends Component {
  render() {
    const { priceTotal, delivery, orderTotal, acceptOrder } = this.props;

    return (
      <div className="order-summary">
        <h3 className="title">Order Summary</h3>
        <p className="info delivery-info">Free delivery below three products.</p>
        <div className="wrapper">
          <p className="subtitle">Total products price:</p>
          <p className="value">{priceTotal}.00 $</p>
        </div>
        <div className="wrapper">
          <p className="subtitle">Delivery:</p>
          <p className="value">{delivery}.00 $</p>
        </div>
        <div className="wrapper">
          <p className="subtitle">Order total:</p>
          <p className="value">{orderTotal}.00 $</p>
        </div>
        <Button clicked={acceptOrder} btnType="dark">{this.props.isAuth ? 'To Payment' : 'Sign Up to Order'}</Button>
      </div>
    )
  }
};

OrderSummary.propTypes = {
  priceTotal: PropTypes.number.isRequired,
  delivery: PropTypes.number.isRequired,
  orderTotal: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    priceTotal: state.products.priceTotal,
    delivery: state.products.delivery,
    orderTotal: state.products.orderTotal
  }
};

export default connect(mapStateToProps)(OrderSummary);