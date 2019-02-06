import * as actionTypes from './actionTypes';
import * as actions from './index';
import axios from '../../axios';

// ====== HANDLE ORDER FORM ======
export const purchaseOrderStart = () => {
  return {
    type: actionTypes.PURCHASE_ORDER_START
  }
};

export const purchaseOrderSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_ORDER_SUCCESS,
    id,
    orderData
  }
};

export const purchaseOrderFail = error => {
  return {
    type: actionTypes.PURCHASE_ORDER_FAIL,
    error
  }
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
};

// after order button click
export const purchaseOrder = (orderData, token) => {
  return dispatch => {
    dispatch(purchaseOrderStart());

    axios.post('/orders.json?auth=' + token, orderData)
      .then(res => {
        dispatch(purchaseOrderSuccess(res.data.name, orderData));
        dispatch(actions.clearCart());
      })
      .catch(err => {
        dispatch(purchaseOrderFail(err));
      });
  }
};

// ====== HANDLE ORDER PAGE ======
export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = (token, userId) => {
  return dispatch => {
    // for start spinner ...
    dispatch(fetchOrdersStart());
    // query params (for check auth and filter orders)
    const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';

    axios.get('/orders.json' + queryParams)
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        };

        // instead setState we dispatch actions
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      })
  }
};