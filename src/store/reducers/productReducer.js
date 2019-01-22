import { productList } from '../../data/data';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  productList,
  products: [],
  direction: {
    price: 'relevance'
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_PRODUCTS:
      let tempProducts;
      (action.category === 'female') ? tempProducts = state.productList.filter(item => item.gender === action.category) : tempProducts = state.productList.filter(item => item.category === action.category);
      return {
        ...state,
        products: tempProducts,
        direction: { price: 'relevance' }
      }

    case actionTypes.HANDLE_DIRECTION:
      return {
        ...state,
        direction: { price: action.direction }
      }

    case actionTypes.SORT_PRODUCTS:
      const sortedProducts = [...state.products];
      sortedProducts.sort((a, b) => {
        switch (state.direction[action.priceKey]) {
          case 'relevance':
            return a[action.idKey] - b[action.idKey];
          case 'price - low to high':
            return a[action.priceKey] - b[action.priceKey];
          case 'price - high to low':
            return b[action.priceKey] - a[action.priceKey];
          default:
            return sortedProducts
        }
      });
      return {
        ...state,
        products: sortedProducts
      }

    default:
      return state;
  }
}

export default productReducer;