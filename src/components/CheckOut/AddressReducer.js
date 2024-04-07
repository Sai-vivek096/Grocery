import { DELETE_ADDRESS_FAILURE, DELETE_ADDRESS_REQUEST, DELETE_ADDRESS_SUCCESS, FETCH_ADDRESSES_FAILURE, FETCH_ADDRESSES_REQUEST, FETCH_ADDRESSES_SUCCESS, UPDATE_ADDRESS_FAILURE, UPDATE_ADDRESS_REQUEST, UPDATE_ADDRESS_SUCCESS, UPDATE_EDIT_ADDRESS_FAILURE, UPDATE_EDIT_ADDRESS_REQUEST, UPDATE_EDIT_ADDRESS_SUCCESS } from "./AddressActions";


const initialState = {
  addresses: [],
  loading: false,
  error: null
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        address: action.payload,
        error: null
      };
    case UPDATE_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      case FETCH_ADDRESSES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_ADDRESSES_SUCCESS:
        return {
          ...state,
          loading: false,
          addresses: action.payload,
          error: null,
        };
      case FETCH_ADDRESSES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        }
        case DELETE_ADDRESS_REQUEST:
          return {
            ...state,
            loading: true,
            error: null
          };
        case DELETE_ADDRESS_SUCCESS:
          return {
            ...state,
            loading: false,
            addresses: state.addresses.filter(address => address.id !== action.payload),
            error: null
          };
        case DELETE_ADDRESS_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload
          };
          case UPDATE_EDIT_ADDRESS_REQUEST:
            return {
              ...state,
              loading: true,
              error: null
            };
          case UPDATE_EDIT_ADDRESS_SUCCESS:
            return {
              ...state,
              loading: false,
              error: null,
              addresses: state.addresses.map(address =>
                address.id === action.payload.id ? action.payload : address
              )
            };
          case UPDATE_EDIT_ADDRESS_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload
            };
    default:
      return state;
  }
};

export default addressReducer