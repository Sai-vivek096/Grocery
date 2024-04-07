import {
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAILURE,
    CLEAR_CART_REQUEST,
    CLEAR_CART_SUCCESS,
    CLEAR_CART_FAILURE,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS,
    FETCH_ORDERS_FAILURE,
  } from './OrderActions';
  
  const initialState = {
    placingOrder: false,
    placingOrderError: '',
    clearingCart: false,
    clearingCartError: '',
    orders: [],
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case PLACE_ORDER_REQUEST:
        return { 
          ...state,
           placingOrder: true, 
         };
      case PLACE_ORDER_SUCCESS:
        return { 
          ...state, 
          placingOrder: false 
        };
      case PLACE_ORDER_FAILURE:
        return {
           ...state,
           placingOrder: false,
           placingOrderError: action.error };
      case CLEAR_CART_REQUEST:
        return { 
          ...state, 
          clearingCart: true,
           clearingCartError: '' };
      case CLEAR_CART_SUCCESS:
        return { 
          ...state, 
          clearingCart: false };
      case CLEAR_CART_FAILURE:
        return {
           ...state,
            clearingCart: false,
            clearingCartError: action.error };
        case FETCH_ORDERS_REQUEST:
          return { 
            ...state, 
            loading: true, 
            error: '' };
        case FETCH_ORDERS_SUCCESS:
          return { ...state, 
            loading: false, 
            orders: action.payload,
          };
        case FETCH_ORDERS_FAILURE:
          return { 
            ...state,
             loading: false, 
             error: action.error };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  