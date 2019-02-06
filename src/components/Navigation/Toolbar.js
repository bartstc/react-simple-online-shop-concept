import React from 'react';
import './Navigation.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import PropTypes from 'prop-types';

import NavigationItems from './NavigationItems/NavigationItems';
import NavigationItemsIcons from './NavigationItems/NavigationItemsIcons';

import logo from '../../assets/icons/logo.png';
import menuIcon from '../../assets/icons/bars_white.png';

const toolbar = (props) => (
  <header className="header">
    <div className="left-wrapper">
      <button onClick={props.openSideDrawer} className="toggle-side-drawer">
        <img src={menuIcon} alt="menu button" />
      </button>
      <img className="logo" src={logo} alt="Elegant Store" />
      <nav className="navigation">
        <NavigationItems />
      </nav>
    </div>
    <nav className="navigation-icons">
      <NavigationItemsIcons />
    </nav>
  </header>
);

toolbar.propTypes = {
  openSideDrawer: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    openSideDrawer: () => dispatch(actions.toggleSideDrawer())
  }
};

export default connect(null, mapDispatchToProps)(toolbar);