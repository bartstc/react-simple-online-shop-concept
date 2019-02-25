import React, { Component } from 'react';
import './Orders.scss';
import axios from '../../axios';
import ErrorHandler from '../../hoc/ErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import PropTypes from 'prop-types';

import Spinner from '../../components/UI/Spinner/Spinner';
import Order from './Order/Order';
import ScrollToTopOnMount from '../../shared/ScrollToTopOnMount';

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.token, this.props.userId);
  };

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      (this.props.orders.length === 0)
        ? orders = <p>You do not have any orders yet.</p>
        : orders = this.props.orders.map(order => (
          <Order key={order.id} products={order.products} price={order.price} />
        ))
    };

    return (
      <>
        <ScrollToTopOnMount />
        <div className="orders-container">
          <h2 className="main-title">Your Orders</h2>
          <p className="main-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend ligula neque, at faucibus metus trum sedru.</p>
          <ul className="order-list">
            {orders}
          </ul>
        </div>
      </>
    );
  }
};

Orders.propTypes = {
  orders: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  fetchOrders: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(Orders, axios));