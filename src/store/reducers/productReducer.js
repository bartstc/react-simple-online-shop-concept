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

const fliterProducts = (state, action) => {
  let tempProducts;
  (action.category === 'female' || action.category === 'male')
    ? tempProducts = state.productList.filter(item => item.gender === action.category)
    : tempProducts = state.productList.filter(item => item.category === action.category);

  return {
    ...state,
    products: tempProducts,
    direction: { price: 'relevance' },
    sortCheckboxValue: 'relevance'
  };
};

const addToCart = (state, action) => {
  const updatedList = [...state.productList];
  const cartItemIndex = updatedList.indexOf(getItem(action.id));
  const cartItem = updatedList[cartItemIndex];

  cartItem.inCart = true;
  cartItem.amount = 1;
  cartItem.size = action.size;
  const price = cartItem.price;
  cartItem.total = price;

  const updatedDetailProduct = { ...state.detailProduct };
  updatedDetailProduct.inCart = true;
  return {
    ...state,
    productList: updatedList,
    cart: [...state.cart, cartItem],
    detailProduct: updatedDetailProduct
  };
};

const addToWishlist = (state, action) => {
  const updatedList = [...state.productList];
  const wishlistItemIndex = updatedList.indexOf(getItem(action.id));
  const wishlistItem = updatedList[wishlistItemIndex];

  wishlistItem.inWishlist = true;

  const updatedDetailProduct = { ...state.detailProduct };
  updatedDetailProduct.inWishlist = true;
  return {
    ...state,
    productList: updatedList,
    wishlist: [...state.wishlist, wishlistItem],
    detailProduct: updatedDetailProduct
  };
};

const sortProducts = (state, action) => {
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
  };
};

const handleDirection = (state, action) => {
  return {
    ...state,
    direction: { price: state.sortCheckboxValue }
  };
};

const handleCheckboxValue = (state, action) => {
  return {
    ...state,
    sortCheckboxValue: action.value
  };
};

const showDetails = (state, action) => {
  const detailProduct = getItem(action.id);
  return {
    ...state,
    detailProduct
  };
};

const calculateOrder = (state, action) => {
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
  };
};

const removeCartItem = (state, action) => {
  let updatedProducts = [...state.productList];
  let tempCart = [...state.cart];
  tempCart = tempCart.filter(item => item.id !== action.id);

  const index = updatedProducts.indexOf(getItem(action.id));
  let removedCartItem = updatedProducts[index];
  removedCartItem.inCart = false;
  removedCartItem.amount = 0;
  removedCartItem.total = 0;
  removedCartItem.size = null;

  return {
    ...state,
    cart: [...tempCart],
    productList: [...updatedProducts]
  };
};

const handleProductAmount = (state, action) => {
  let tempCart = [...state.cart];
  const selectedProduct = tempCart.find(item => item.id === action.id);

  const index = tempCart.indexOf(selectedProduct);
  const incrementedProduct = tempCart[index];

  if (action.value === 'increment') {
    incrementedProduct.amount = incrementedProduct.amount + 1;
  } else if (action.value === 'decrement') {
    incrementedProduct.amount = incrementedProduct.amount - 1;
  }
  incrementedProduct.total = incrementedProduct.amount * incrementedProduct.price;

  return {
    ...state,
    cart: [...tempCart]
  };
};

const clearCart = (state, action) => {
  const updatedProductList = [...state.productList];
  updatedProductList.forEach(product => {
    product.total = 0;
    product.size = null;
    product.amount = 0;
    product.inCart = false;
  });

  return {
    ...state,
    productList: updatedProductList,
    cart: []
  };
};

const removeWishlistItem = (state, action) => {
  let updatedProducts = [...state.productList];
  let tempWishlist = [...state.wishlist];
  tempWishlist = tempWishlist.filter(item => item.id !== action.id);

  const index = updatedProducts.indexOf(getItem(action.id));
  let removedWishlistItem = updatedProducts[index];
  removedWishlistItem.inWishlist = false;

  return {
    ...state,
    wishlist: [...tempWishlist],
    productList: [...updatedProducts]
  };
};

const clearWishlist = (state, action) => {
  const updatedProductList = [...state.productList];
  updatedProductList.forEach(product => {
    product.inWishlist = false;
  });

  return {
    ...state,
    productList: updatedProductList,
    wishlist: []
  };
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_PRODUCTS:
      return fliterProducts(state, action);

    case actionTypes.ADD_TO_CART:
      return addToCart(state, action);

    case actionTypes.ADD_TO_WISHLIST:
      return addToWishlist(state, action);

    case actionTypes.SORT_PRODUCTS:
      return sortProducts(state, action);

    case actionTypes.HANDLE_DIRECTION:
      return handleDirection(state, action);

    case actionTypes.HANDLE_CHECKBOX_VALUE:
      return handleCheckboxValue(state, action);

    case actionTypes.SHOW_DETAILS:
      return showDetails(state, action);

    case actionTypes.CALCULATE_ORDER:
      return calculateOrder(state, action);

    case actionTypes.REMOVE_CART_ITEM:
      return removeCartItem(state, action);

    case actionTypes.HANDLE_PRODUCT_AMOUNT:
      return handleProductAmount(state, action);

    case actionTypes.CLEAR_CART:
      return clearCart(state, action);

    case actionTypes.REMOVE_WISHLIST_ITEM:
      return removeWishlistItem(state, action);

    case actionTypes.CLEAR_WISHLIST:
      return clearWishlist(state, action);

    default:
      return state;
  }
}

export default productReducer;