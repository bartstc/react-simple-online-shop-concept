import * as actionTypes from './actionTypes';

export const handleLinkClick = () => {
  return {
    type: actionTypes.LINK_CLICKED,
  }
};

export const openModal = (id) => {
  return {
    type: actionTypes.OPEN_MODAL,
    id
  }
};

export const closeModal = (id) => {
  return {
    type: actionTypes.CLOSE_MODAL
  }
};

export const toggleSideDrawer = () => {
  return {
    type: actionTypes.TOGGLE_SIDEDRAWER,
  }
};