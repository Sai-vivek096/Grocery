import axios from 'axios';

export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAILURE = 'PLACE_ORDER_FAILURE';

export const CLEAR_CART_REQUEST = 'CLEAR_CART_REQUEST';
export const CLEAR_CART_SUCCESS = 'CLEAR_CART_SUCCESS';
export const CLEAR_CART_FAILURE = 'CLEAR_CART_FAILURE';

export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';

export const placeOrder = (orderDetails) => {
  return async (dispatch) => {
    dispatch({ type: PLACE_ORDER_REQUEST });
    try {
      await axios.post(`http://localhost:3001/OrderDetails`, orderDetails); 
      dispatch({ type: PLACE_ORDER_SUCCESS });
    } catch (error) {
      dispatch({ type: PLACE_ORDER_FAILURE, error: error.message });
      throw error;
    }
  };
};

export const clearCart = () => {
  return async (dispatch) => {
    dispatch({ type: CLEAR_CART_REQUEST });
    try {
      await axios.delete(`http://localhost:3001/CartItems`); 
      dispatch({ type: CLEAR_CART_SUCCESS });
    } catch (error) {
      dispatch({ type: CLEAR_CART_FAILURE, error: error.message });
      throw error;
    } 
  };
};

export const fetchOrders = (userId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ORDERS_REQUEST });
    try {
      const response = await axios.get(`http://localhost:3001/OrderDetails?userId=${userId}`);
      dispatch({ type: FETCH_ORDERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_ORDERS_FAILURE, error: error.message });
    }
  };
};
