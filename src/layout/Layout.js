import React, { Component, Fragment } from 'react';
import './Layout.scss';

import Toolbar from '../components/Navigation/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer';
import Footer from '../components/UI/Footer/Footer';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Toolbar />
        <SideDrawer />
        <main className="main-content">
          {this.props.children}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;