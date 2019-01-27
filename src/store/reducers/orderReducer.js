import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const purchaseOrderStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const purchaseOrderSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.id
  }

  return {
    ...state,
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  };
};

const purchaseOrderFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};

const purchaseInit = (state, action) => {
  return {
    ...state,
    purchased: false
  };
};

const fetchOrderStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const fetchOrderSuccess = (state, action) => {
  return {
    ...state,
    orders: action.orders,
    loading: false
  };
};

const fetchOrderFail = (state, action) => {
  return {
    ...state,
    loading: false
  };
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_ORDER_START:
      return purchaseOrderStart(state, action);

    case actionTypes.PURCHASE_ORDER_SUCCESS:
      return purchaseOrderSuccess(state, action);

    case actionTypes.PURCHASE_ORDER_FAIL:
      return purchaseOrderFail(state, action);

    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);

    // ORDERS PAGE CASES
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrderStart(state, action);

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrderSuccess(state, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrderFail(state, action);

    default:
      return state;
  }
};

export default orderReducer;