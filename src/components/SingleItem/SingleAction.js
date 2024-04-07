import axios from "axios"

export const FETCH_SINGLE_ITEM_REQUEST = 'FETCH_SINGLE_ITEM_REQUEST'
export const FETCH_SINGLE_ITEM_SUCCESS = 'FETCH_SINGLE_ITEM_SUCCESS'
export const FETCH_SINGLE_ITEM_FAILURE = 'FETCH_SINGLE_ITEM_FAILURE'


export const fetchSingleItemRequest = () => ({
    type: FETCH_SINGLE_ITEM_REQUEST
})

export const fetchSingleItemSuccess = (item) => ({
    type : FETCH_SINGLE_ITEM_SUCCESS,
    payload: item,
})

export const fetchSingleItemFailure = (error) => ({
    type: FETCH_SINGLE_ITEM_FAILURE,
    payload: error
})

export const fetchSingleItem = (id) => {
    return async (dispatch) => {
      dispatch(fetchSingleItemRequest());
      try {
        const response = await axios.get(`http://localhost:3001/items?id=${id}`);
        dispatch(fetchSingleItemSuccess(response.data[0]));

      } catch (error) {
        dispatch(fetchSingleItemFailure(error.message));
      }
    };
  };
  