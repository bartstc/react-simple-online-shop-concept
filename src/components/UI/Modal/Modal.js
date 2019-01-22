import React, { Component, Fragment } from 'react';
import './Modal.scss';

import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Modal updated');
  //   return nextProps.showModal !== this.props.showModal || nextProps.showBackdrop !== this.props.showBackdrop || nextProps.children !== this.props.children;
  // };

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.showBackdrop} clicked={this.props.closeModal} />
        <div
          className="modal"
          style={{
            transform: this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.showModal ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default Modal;