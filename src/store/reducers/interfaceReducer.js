import { productList, initProduct } from '../../data/data';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  modalShowed: false,
  sideDrawerShowed: false,
  modalProduct: initProduct
};

const getItem = id => productList.find(item => item.id === id);

const interfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.OPEN_MODAL):
      return {
        ...state,
        modalProduct: getItem(action.id),
        modalShowed: true
      }

    case (actionTypes.CLOSE_MODAL):
      return {
        ...state,
        modalShowed: false
      }

    case (actionTypes.TOGGLE_SIDEDRAWER):
      return {
        ...state,
        sideDrawerShowed: !state.sideDrawerShowed,
      }

    case (actionTypes.LINK_CLICKED):
      return {
        ...state,
        sideDrawerShowed: false
      }

    default:
      return state;
  }
};

export default interfaceReducer;