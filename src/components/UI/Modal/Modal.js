import React from 'react';
import './Modal.scss';

import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ showBackdrop, closeModal, modalType, showModal, children }) => (
  <>
    <Backdrop show={showBackdrop} clicked={closeModal} />
    <div
      className={["modal", modalType].join(' ')}
      style={{
        transform: showModal ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: showModal ? '1' : '0'
      }}>
      {children}
    </div>
  </>
)

export default Modal;