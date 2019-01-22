import React, { Component } from 'react';
import NavigationItem from './NavigationItem';

import userIcon from '../../../assets/icons/user.png';
import heartIcon from '../../../assets/icons/heart_white.png';
import cartIcon from '../../../assets/icons/cart_white.png';

class NavigationItemsIcons extends Component {
  render() {
    return (
      <ul className="navigation-icons-list">
        <p className="products-amount">4</p>
        <NavigationItem link="/auth" exact>
          <img className="icon" src={userIcon} alt="sign in or sign up" />
        </NavigationItem>
        <NavigationItem link="/wishlist" exact>
          <img className="icon" src={heartIcon} alt="wishlist" />
        </NavigationItem>
        <NavigationItem link="/cart" exact>
          <img className="icon" src={cartIcon} alt="cart" />
        </NavigationItem>
      </ul>
    );
  }
}

export default NavigationItemsIcons;