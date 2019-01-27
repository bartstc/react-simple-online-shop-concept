import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';

// COMPONENTS
import Layout from './layout/Layout';
import Auth from './containers/Auth/Auth';
import Cart from './containers/Cart/Cart';
import Contact from './containers/Contact/Contact';
import Details from './containers/Details/Details';
import Orders from './containers/Orders/Orders';
import ProductList from './containers/ProductList/ProductList';
import Wishlist from './containers/Wishlist/Wishlist';
import HomePage from './containers/HomePage/HomePage';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  };

  render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            {!this.props.isAuth && <Route path="/auth" component={Auth} />}
            {this.props.isAuth && <Route path="/orders" component={Orders} />}
            {this.props.isAuth && <Route path="/logout" component={Logout} />}
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
