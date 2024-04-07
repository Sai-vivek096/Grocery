import { FETCH_SIMILAR_ITEMS_SUCCESS } from "./SimilarActions";


const initialState = {
  similarItems: [],
  loading: false,
  error: null
};

const similarItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIMILAR_ITEMS_SUCCESS:
      return {
        ...state,
        similarItems: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default similarItemsReducer;
