import * as actionTypes from './actionTypes';

export const filterProducts = category => {
  return {
    type: actionTypes.FILTER_PRODUCTS,
    category
  }
};

export const sortProducts = (priceKey, idKey) => {
  return {
    type: actionTypes.SORT_PRODUCTS,
    priceKey,
    idKey
  }
};

export const handleDirection = direction => {
  return {
    type: actionTypes.HANDLE_DIRECTION,
    direction
  }
};