import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSideDrawer } from '../../store/actions';
import './Navigation.scss';

import NavigationItems from './NavigationItems/NavigationItems';
import NavigationItemsIcons from './NavigationItems/NavigationItemsIcons';

import logo from '../../assets/icons/logo.png';
import menuIcon from '../../assets/icons/bars_white.png';

const toolbar = ({ toggleSideDrawer }) => (
  <header className="header">
    <div className="left-wrapper">
      <button onClick={toggleSideDrawer} className="toggle-side-drawer">
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
  toggleSideDrawer: PropTypes.func.isRequired
};

export default connect(null, { toggleSideDrawer })(toolbar);