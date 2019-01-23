import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import { NavLink } from 'react-router-dom';

class NavigationItem extends Component {
  render() {
    return (
      <li
        style={{ alignSelf: 'flex-start' }}
        className="nav-link-wrapper"
        onClick={this.props.handleLinkClick}>
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

const mapDispatchToProps = dispatch => {
  return {
    handleLinkClick: () => dispatch(actions.handleLinkClick())
  }
}

export default connect(null, mapDispatchToProps)(NavigationItem);