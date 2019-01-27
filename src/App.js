import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import asyncComponent from './hoc/asyncComponent';

// COMPONENTS
import Layout from './layout/Layout';
import Cart from './containers/Cart/Cart';
import Contact from './containers/Contact/Contact';
import Details from './containers/Details/Details';
import ProductList from './containers/ProductList/ProductList';
import Wishlist from './containers/Wishlist/Wishlist';
import HomePage from './containers/HomePage/HomePage';
import Logout from './containers/Auth/Logout/Logout';

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  };

  render() {
    const { isAuth } = this.props;

    return (
      <Fragment>
        <Layout>
          <Switch>
            {!isAuth && <Route path="/auth" component={asyncAuth} />}
            {isAuth && <Route path="/orders" component={asyncOrders} />}
            {isAuth && <Route path="/logout" component={Logout} />}
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/details/:id" component={Details} />
            <Route path="/productlist/:type" component={ProductList} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/" exact component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Fragment>
    );
  }
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
