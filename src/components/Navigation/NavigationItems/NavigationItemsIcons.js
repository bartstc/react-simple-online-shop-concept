import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem';
import { connect } from 'react-redux';

import userIcon from '../../../assets/icons/user.png';
import heartIcon from '../../../assets/icons/heart_white.png';
import cartIcon from '../../../assets/icons/cart_white.png';
import logoutIcon from '../../../assets/icons/logout.png';

const navigationItemsIcons = ({ cartItems, isAuth }) => (
  <ul className="navigation-icons-list">
    <p className="products-amount">{cartItems.length}</p>
    {!isAuth
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

navigationItemsIcons.propTypes = {
  cartItems: PropTypes.array,
  isAuth: PropTypes.bool
};

const mapStateToProps = ({ products, auth }) => ({
  cartItems: products.cart,
  isAuth: auth.token !== null
});

export default connect(mapStateToProps)(navigationItemsIcons);