import React, { Component, Fragment } from 'react';
import './Modal.scss';

import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Modal updated');
  //   return nextProps.showModal !== this.props.showModal || nextProps.showBackdrop !== this.props.showBackdrop || nextProps.children !== this.props.children;
  // };

  render() {
    const { showBackdrop, closeModal, modalType, showModal, children } = this.props;

    return (
      <Fragment>
        <Backdrop show={showBackdrop} clicked={closeModal} />
        <div
          className={["modal", modalType].join(' ')}
          style={{
            transform: showModal ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: showModal ? '1' : '0'
          }}>
          {children}
        </div>
      </Fragment>
    )
  }
}

export default Modal;