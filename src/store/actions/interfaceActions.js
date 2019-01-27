import * as actionTypes from './actionTypes';

export const openModal = (id = 101) => {
  return {
    type: actionTypes.OPEN_MODAL,
    id
  };
};

export const closeModal = (id) => {
  return {
    type: actionTypes.CLOSE_MODAL
  };
};

export const toggleSideDrawer = () => {
  return {
    type: actionTypes.TOGGLE_SIDEDRAWER,
  };
};