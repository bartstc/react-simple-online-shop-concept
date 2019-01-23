import { productList } from '../../data/data';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  productList,
  products: [],
  cart: [],
  wishlist: [],
  direction: {
    price: 'relevance'
  },
  sortCheckboxValue: 'relevance',
  detailProduct: null
};

const getItem = id => productList.find(item => item.id === id);

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_PRODUCTS:
      let tempProducts;
      (action.category === 'female') ? tempProducts = state.productList.filter(item => item.gender === action.category) : tempProducts = state.productList.filter(item => item.category === action.category);
      return {
        ...state,
        products: tempProducts,
        direction: { price: 'relevance' },
        sortCheckboxValue: 'relevance'
      }

    case actionTypes.ADD_TO_CART:
      const cUpdatedList = [...state.productList];
      const cartItemIndex = cUpdatedList.indexOf(getItem(action.id));
      const cartItem = cUpdatedList[cartItemIndex];

      cartItem.inCart = true;
      cartItem.amount = 1;
      cartItem.size = action.size;
      const price = cartItem.price;
      cartItem.total = price;

      const cUpdatedDetailProduct = { ...state.detailProduct };
      cUpdatedDetailProduct.inCart = true;
      return {
        ...state,
        productList: cUpdatedList,
        cart: [...state.cart, cartItem],
        detailProduct: cUpdatedDetailProduct
      }

    case actionTypes.ADD_TO_WISHLIST:
      const wUpdatedList = [...state.productList];
      const wishlistItemIndex = wUpdatedList.indexOf(getItem(action.id));
      const wishlistItem = wUpdatedList[wishlistItemIndex];

      wishlistItem.inWishlist = true;

      const wUpdatedDetailProduct = { ...state.detailProduct };
      wUpdatedDetailProduct.inWishlist = true;
      return {
        ...state,
        productList: wUpdatedList,
        wishlist: [...state.wishlist, wishlistItem],
        detailProduct: wUpdatedDetailProduct
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

    case actionTypes.HANDLE_DIRECTION:
      return {
        ...state,
        direction: { price: state.sortCheckboxValue }
      }

    case actionTypes.HANDLE_CHECKBOX_VALUE:
      return {
        ...state,
        sortCheckboxValue: action.value
      }

    case actionTypes.SHOW_DETAILS:
      const detailProduct = getItem(action.id);
      return {
        ...state,
        detailProduct
      }

    default:
      return state;
  }
}

export default productReducer;