import React from 'react';
import NavigationItem from './NavigationItem';
import { connect } from 'react-redux';

import userIcon from '../../../assets/icons/user.png';
import heartIcon from '../../../assets/icons/heart_white.png';
import cartIcon from '../../../assets/icons/cart_white.png';
import logoutIcon from '../../../assets/icons/logout.png';

const navigationItemsIcons = props => (
  <ul className="navigation-icons-list">
    <p className="products-amount">{props.cartItems.length}</p>
    {!props.isAuth
      ? <NavigationItem link="/auth" exact>
        <img className="icon" src={userIcon} alt="sign in or sign up" />
      </NavigationItem>
      : <NavigationItem link="/logout" exact>
        <img className="icon" src={logoutIcon} alt="sign in or sign up" />
      </NavigationItem>
    }
    <NavigationItem link="/wishlist" exact>
      <img className="icon" src={heartIcon} alt="wishlist" />
    </NavigationItem>
    <NavigationItem link="/cart" exact>
      <img className="icon" src={cartIcon} alt="cart" />
    </NavigationItem>
  </ul>
);

const mapStateToProps = state => {
  return {
    cartItems: state.products.cart,
    isAuth: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(navigationItemsIcons);