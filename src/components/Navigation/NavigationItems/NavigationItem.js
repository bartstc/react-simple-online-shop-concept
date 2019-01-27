import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class NavigationItem extends Component {
  render() {
    return (
      <li
        style={{ alignSelf: 'flex-start' }}
        className="nav-link-wrapper">
        <NavLink
          onClick={this.props.clicked}
          style={this.props.style}
          className={["nav-link", this.props.linkType].join(' ')}
          to={this.props.link}
          exact={this.props.exact}>
          {this.props.children}
        </NavLink>
      </li>
    )
  }
};

export default NavigationItem;