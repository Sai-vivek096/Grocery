import { FETCH_SINGLE_ITEM_FAILURE, FETCH_SINGLE_ITEM_REQUEST, FETCH_SINGLE_ITEM_SUCCESS } from "./SingleAction";


  const initialState = {
    item: {},
    loading: false,
    error: null
  };
  debugger;
  const ItemReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SINGLE_ITEM_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_SINGLE_ITEM_SUCCESS:
        return {
          ...state,
          loading: false,
          item: action.payload,
          error: null
        };
      case  FETCH_SINGLE_ITEM_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default ItemReducer;
  