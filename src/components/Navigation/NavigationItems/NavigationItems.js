import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import NavigationItem from './NavigationItem';

const navigationItems = props => (
  <ul className="nav-list">
    <NavigationItem
      clicked={() => props.filterProducts('female')}
      link="/productlist/female"
      exact>Women</NavigationItem>
    <NavigationItem
      clicked={() => props.filterProducts('male')}
      link="/productlist/male"
      exact>Men</NavigationItem>
    <NavigationItem link="/contact" exact>Contact</NavigationItem>
    <NavigationItem link="/" exact>Home</NavigationItem>
  </ul>
);

const mapDispatchToProps = dispatch => {
  return {
    filterProducts: (category) => dispatch(actions.filterProducts(category))
  }
}

export default connect(null, mapDispatchToProps)(navigationItems);