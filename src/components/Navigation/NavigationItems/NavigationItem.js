import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
  <li onClick={props.handleLinkClick}>
    <NavLink
      onClick={props.clicked}
      style={props.style}
      className={["nav-link", props.linkType].join(' ')}
      to={props.link}
      exact={props.exact}>
      {props.children}
    </NavLink>
  </li>
);

const mapDispatchToProps = dispatch => {
  return {
    handleLinkClick: () => dispatch(actions.handleLinkClick())
  }
}

export default connect(null, mapDispatchToProps)(navigationItem);