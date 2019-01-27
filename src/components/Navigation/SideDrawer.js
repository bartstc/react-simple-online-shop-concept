import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './Navigation.scss';
import * as actions from '../../store/actions';

import logo from '../../assets/icons/logo.png';
import closeBtnIcon from '../../assets/icons/arrow_left.png';

import SideNavigation from './NavigationItems/SideNavigation';
import NavigationItem from './NavigationItems/NavigationItem';
import Backdrop from '../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  let attachedClasses = ["side-drawer", "close"];
  if (props.showSideDrawer) {
    attachedClasses = ["side-drawer", "open"];
  };

  return (
    <Fragment>
      <Backdrop show={props.showSideDrawer} clicked={props.closeSideDrawer} />
      <div onClick={props.closeSideDrawer} className={attachedClasses.join(' ')}>
        <div className="logo-wrapper">
          <img className="logo" src={logo} alt="Elegant Store" />
          <button onClick={props.closeSideDrawer} className="toggle-side-drawer">
            <img src={closeBtnIcon} alt="close side drawer" />
          </button>
        </div>
        <div className="side-navigation-wrapper">
          <SideNavigation>
            <NavigationItem
              linkType={'main'}
              link="/contact"
              exact>Contact</NavigationItem>
            <NavigationItem
              linkType={'main'}
              link="/"
              exact>Home</NavigationItem>
            {props.isAuth ? <NavigationItem
              linkType={'main'}
              link="/orders"
              exact>Orders</NavigationItem> : null}
          </SideNavigation>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    showSideDrawer: state.interface.sideDrawerShowed,
    isAuth: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeSideDrawer: () => dispatch(actions.toggleSideDrawer())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sideDrawer);