import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleSideDrawer } from '../../store/actions';
import './Navigation.scss';

import logo from '../../assets/icons/logo.png';
import closeBtnIcon from '../../assets/icons/arrow_left.png';

import SideNavigation from './NavigationItems/SideNavigation';
import NavigationItem from './NavigationItems/NavigationItem';
import Backdrop from '../UI/Backdrop/Backdrop';

const sideDrawer = ({ toggleSideDrawer, showSideDrawer, isAuth }) => {
  let attachedClasses = ["side-drawer", "close"];
  if (showSideDrawer) {
    attachedClasses = ["side-drawer", "open"];
  };

  return (
    <>
      <Backdrop show={showSideDrawer} clicked={toggleSideDrawer} />
      <div className={attachedClasses.join(' ')}>
        <div className="logo-wrapper">
          <img className="logo" src={logo} alt="Elegant Store" />
          <button onClick={toggleSideDrawer} className="toggle-side-drawer">
            <img src={closeBtnIcon} alt="close side drawer" />
          </button>
        </div>
        <div onClick={toggleSideDrawer} className="side-navigation-wrapper">
          <SideNavigation>
            <NavigationItem
              linkType={'main'}
              link="/contact"
              exact>Contact</NavigationItem>
            <NavigationItem
              linkType={'main'}
              link="/"
              exact>Home</NavigationItem>
            {isAuth ? <NavigationItem
              linkType={'main'}
              link="/orders"
              exact>Orders</NavigationItem> : null}
          </SideNavigation>
        </div>
      </div>
    </>
  );
};

sideDrawer.propTypes = {
  showSideDrawer: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  toggleSideDrawer: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    showSideDrawer: state.interface.sideDrawerShowed,
    isAuth: state.auth.token !== null
  };
};

export default connect(mapStateToProps, { toggleSideDrawer })(sideDrawer);