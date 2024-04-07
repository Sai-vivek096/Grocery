import axios from 'axios';

export const UPDATE_ADDRESS_REQUEST = 'UPDATE_ADDRESS_REQUEST';
export const UPDATE_ADDRESS_SUCCESS = 'UPDATE_ADDRESS_SUCCESS';
export const UPDATE_ADDRESS_FAILURE = 'UPDATE_ADDRESS_FAILURE';
export const FETCH_ADDRESSES_REQUEST = 'FETCH_ADDRESSES_REQUEST';
export const FETCH_ADDRESSES_SUCCESS = 'FETCH_ADDRESSES_SUCCESS';
export const FETCH_ADDRESSES_FAILURE = 'FETCH_ADDRESSES_FAILURE';
export const DELETE_ADDRESS_REQUEST = 'DELETE_ADDRESS_REQUEST';
export const DELETE_ADDRESS_SUCCESS = 'DELETE_ADDRESS_SUCCESS';
export const DELETE_ADDRESS_FAILURE = 'DELETE_ADDRESS_FAILURE';
export const UPDATE_EDIT_ADDRESS_REQUEST = 'UPDATE_EDIT_ADDRESS_REQUEST';
export const UPDATE_EDIT_ADDRESS_SUCCESS = 'UPDATE_EDIT_ADDRESS_SUCCESS';
export const UPDATE_EDIT_ADDRESS_FAILURE = 'UPDATE_EDIT_ADDRESS_FAILURE';

export const updateAddressRequest = () => ({
  type: UPDATE_ADDRESS_REQUEST
});

export const updateAddressSuccess = (address) => ({
  type: UPDATE_ADDRESS_SUCCESS,
  payload: address
});

export const updateAddressFailure = (error) => ({
  type: UPDATE_ADDRESS_FAILURE,
  payload: error
});

export const fetchAddressesRequest = () => ({
  type: FETCH_ADDRESSES_REQUEST,
});

export const fetchAddressesSuccess = (addresses) => ({
  type: FETCH_ADDRESSES_SUCCESS,
  payload: addresses,
});

export const fetchAddressesFailure = (error) => ({
  type: FETCH_ADDRESSES_FAILURE,
  payload: error,
});

const updateEditAddressRequest = () => {
  return {
    type: UPDATE_EDIT_ADDRESS_REQUEST
  };
};

const updateEditAddressSuccess = (address) => {
  return {
    type: UPDATE_EDIT_ADDRESS_SUCCESS,
    payload: address
  };
};

const updateEditAddressFailure = (error) => {
  return {
    type: UPDATE_EDIT_ADDRESS_FAILURE,
    payload: error
  };
};

export const updateAddress = (addressData) => {
  return async (dispatch) => {
    dispatch(updateAddressRequest());
    try {
      const response = await axios.post(`http://localhost:3001/SaveAddress`, addressData);
      dispatch(updateAddressSuccess(response.data));
      console.log("Address added successfully");
    } catch (error) {
      dispatch(updateAddressFailure(error));
      console.error('Error adding address:', error);
    }
  };
};

export const fetchAddresses = (userId) => {
  return async (dispatch) => {
    dispatch(fetchAddressesRequest());
    try {
      const response = await fetch(`http://localhost:3001/SaveAddress?userId=${userId}`);
      const data = await response.json();
      dispatch(fetchAddressesSuccess(data));
    } catch (error) {
      dispatch(fetchAddressesFailure(error.message));
    }
  };
};

export const deleteAddress = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_ADDRESS_REQUEST });
    try {
      await axios.delete(`http://localhost:3001/SaveAddress/${id}`); 
      dispatch({
        type: DELETE_ADDRESS_SUCCESS,
        payload: id
      });
    } catch (error) {
      dispatch({
        type: DELETE_ADDRESS_FAILURE,
        payload: error.message
      });
    }
  };
};

export const updateEditAddress = (id, updatedAddress) => {
  return async (dispatch) => {
    dispatch(updateEditAddressRequest());
    try {
      const response = await axios.put(`http://localhost:3001/SaveAddress/${id}`, updatedAddress);
      dispatch(updateEditAddressSuccess(response.data));
    } catch (error) {
      dispatch(updateEditAddressFailure(error.message));
    }
  };
};