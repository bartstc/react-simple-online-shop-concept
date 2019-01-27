import { productList, initProduct } from '../../data/data';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  modalShowed: false,
  sideDrawerShowed: false,
  modalProduct: initProduct
};

const openModal = (state, action) => {
  return {
    ...state,
    modalProduct: getItem(action.id),
    modalShowed: true
  };
};

const closeModal = (state, action) => {
  return {
    ...state,
    modalShowed: false
  };
};

const toggleSidedrawer = (state, action) => {
  return {
    ...state,
    sideDrawerShowed: !state.sideDrawerShowed,
  };
};

const getItem = id => productList.find(item => item.id === id);

const interfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.OPEN_MODAL):
      return openModal(state, action);

    case (actionTypes.CLOSE_MODAL):
      return closeModal(state, action);

    case (actionTypes.TOGGLE_SIDEDRAWER):
      return toggleSidedrawer(state, action);

    default:
      return state;
  }
};

export default interfaceReducer;