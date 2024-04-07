import { ADD_TO_CART,  DECREMENT_QUANTITY,  FETCH_CART_ITEMS_FAILURE, FETCH_CART_ITEMS_SUCCESS, INCREMENT_QUANTITY, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_SUCCESS, UPDATE_CART_ITEM_QUANTITY } from "./CartActions";

const initialState = {
  cartItems: [],
  error:null
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      case FETCH_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        error: null
      };
    case FETCH_CART_ITEMS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
      case REMOVE_FROM_CART_SUCCESS:
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
          error: null,
        };
      case REMOVE_FROM_CART_FAILURE:
        return {
          ...state,
          error: action.payload,
        };
        case INCREMENT_QUANTITY:
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        case DECREMENT_QUANTITY:
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
          ),
        };
        case UPDATE_CART_ITEM_QUANTITY:
          const { data } = action.payload;
          debugger;
           const findIndex = state.cartItems.findIndex(item => item.id === data.id);
           state.cartItems[findIndex] = data;
          return {
              ...state,
              cartItems: state.cartItems
          };
        
    default:
      return state;
  }
};

export default cartReducer;
