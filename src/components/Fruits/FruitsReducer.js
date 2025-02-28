import { FETCH_ITEMS_FAILURE, FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS } from "./FruitsActions";

  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  const ItemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ITEMS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_ITEMS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload,
          error: null
        };
      case FETCH_ITEMS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default ItemsReducer;
  