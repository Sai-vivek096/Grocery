import axios from 'axios';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST
});

export const fetchItemsSuccess = (items) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items
});

export const fetchItemsFailure = (error) => ({
  type: FETCH_ITEMS_FAILURE,
  payload: error
});

export const fetchItems = (category) => {
  return async (dispatch) => {
    dispatch(fetchItemsRequest());
    try {
      let response;
      if(category){

        response =  await axios.get(`http://localhost:3001/items?category=${category}`);
      } else {
        response =  await axios.get(`http://localhost:3001/items`);
      }
      dispatch(fetchItemsSuccess(response.data));
    } catch (error) {
      dispatch(fetchItemsFailure(error.message));
    }
  };
};
