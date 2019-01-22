import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

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

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/details/:id" component={Details} />
            <Route path="/orders" component={Orders} />
            <Route path="/productlist/:type" component={ProductList} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
