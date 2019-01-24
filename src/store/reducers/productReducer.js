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
  detailProduct: null,
  priceTotal: 0,
  delivery: 0,
  orderTotal: 0
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

    case actionTypes.CALCULATE_ORDER:
      let priceTotal = 0;
      state.cart.map(item => (priceTotal += item.total));

      let productAmount = 0;
      state.cart.map(item => (productAmount += item.amount));
      let delivery = 0;
      if (productAmount > 3) delivery = productAmount * 10;

      let orderTotal = priceTotal + delivery;
      return {
        ...state,
        priceTotal,
        delivery,
        orderTotal
      }

    case actionTypes.REMOVE_CART_ITEM:
      let rcUpdatedProducts = [...state.productList];
      let rcTempCart = [...state.cart];
      rcTempCart = rcTempCart.filter(item => item.id !== action.id);

      const rcIndex = rcUpdatedProducts.indexOf(getItem(action.id));
      let removedCartItem = rcUpdatedProducts[rcIndex];
      removedCartItem.inCart = false;
      removedCartItem.amount = 0;
      removedCartItem.total = 0;
      removedCartItem.size = null;

      return {
        ...state,
        cart: [...rcTempCart],
        productList: [...rcUpdatedProducts]
      }

    case actionTypes.HANDLE_PRODUCT_AMOUNT:
      let iTempCart = [...state.cart];
      const iSelectedProduct = iTempCart.find(item => item.id === action.id);

      const iIndex = iTempCart.indexOf(iSelectedProduct);
      const incrementedProduct = iTempCart[iIndex];

      if (action.value === 'increment') {
        incrementedProduct.amount = incrementedProduct.amount + 1;
      } else if (action.value === 'decrement') {
        incrementedProduct.amount = incrementedProduct.amount - 1;
      }
      incrementedProduct.total = incrementedProduct.amount * incrementedProduct.price;

      return {
        ...state,
        cart: [...iTempCart]
      }

    case actionTypes.CLEAR_CART:
      const cNewProductList = [...state.productList];
      cNewProductList.forEach(product => {
        product.total = 0;
        product.size = null;
        product.amount = 0;
        product.inCart = false;
      });

      return {
        ...state,
        productList: cNewProductList,
        cart: []
      }

    case actionTypes.REMOVE_WISHLIST_ITEM:
      let rwUpdatedProducts = [...state.productList];
      let tempWishlist = [...state.wishlist];
      tempWishlist = tempWishlist.filter(item => item.id !== action.id);

      const rwIndex = rwUpdatedProducts.indexOf(getItem(action.id));
      let removedWishlistItem = rwUpdatedProducts[rwIndex];
      removedWishlistItem.inWishlist = false;

      return {
        ...state,
        wishlist: [...tempWishlist],
        productList: [...rwUpdatedProducts]
      }

    case actionTypes.CLEAR_WISHLIST:
      const wNewProductList = [...state.productList];
      wNewProductList.forEach(product => {
        product.inWishlist = false;
      });

      return {
        ...state,
        productList: wNewProductList,
        wishlist: []
      }

    default:
      return state;
  }
}

export default productReducer;