import * as actionTypes from './actionTypes';

export const filterProducts = category => {
  return {
    type: actionTypes.FILTER_PRODUCTS,
    category
  }
};

export const addToCart = (id, size) => {
  return {
    type: actionTypes.ADD_TO_CART,
    id,
    size
  }
};

export const addToWishlist = id => {
  return {
    type: actionTypes.ADD_TO_WISHLIST,
    id
  }
};

export const sortProducts = (priceKey, idKey) => {
  return {
    type: actionTypes.SORT_PRODUCTS,
    priceKey,
    idKey
  }
};

export const handleDirection = () => {
  return {
    type: actionTypes.HANDLE_DIRECTION
  }
};

export const handleCheckboxValue = value => {
  return {
    type: actionTypes.HANDLE_CHECKBOX_VALUE,
    value
  }
}

export const showDetails = id => {
  return {
    type: actionTypes.SHOW_DETAILS,
    id
  }
};

export const calculateOrder = () => {
  return {
    type: actionTypes.CALCULATE_ORDER
  }
};

export const removeCartItem = id => {
  return {
    type: actionTypes.REMOVE_CART_ITEM,
    id
  }
};

export const handleProductAmount = (id, value) => {
  return {
    type: actionTypes.HANDLE_PRODUCT_AMOUNT,
    id,
    value
  }
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART
  }
};

export const removeWishlistItem = id => {
  return {
    type: actionTypes.REMOVE_WISHLIST_ITEM,
    id
  }
};

export const clearWishlist = () => {
  return {
    type: actionTypes.CLEAR_WISHLIST
  }
};