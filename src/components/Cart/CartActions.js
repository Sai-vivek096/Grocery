import axios from 'axios'
export const ADD_TO_CART = 'ADD_TO_CART';
export const FETCH_CART_ITEMS_SUCCESS = 'FETCH_CART_ITEMS_SUCCESS';
export const FETCH_CART_ITEMS_FAILURE = 'FETCH_CART_ITEMS_FAILURE';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAILURE = 'REMOVE_FROM_CART_FAILURE';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';
 


export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: {
    ...item
  },
});

export const fetchCartItemsSuccess = items => {
  return {
    type: FETCH_CART_ITEMS_SUCCESS,
    payload: items
  };
};

export const fetchCartItemsFailure = error => {
  return {
    type: FETCH_CART_ITEMS_FAILURE,
    payload: error
  };
};


export const removeFromCartSuccess = (itemId) => ({
  type: REMOVE_FROM_CART_SUCCESS,
  payload: itemId,
});

export const removeFromCartFailure = (error) => ({
  type: REMOVE_FROM_CART_FAILURE,
  payload: error,
});

export const incrementQuantity = (id) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: id
  };
};

export const decrementQuantity = (id) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: id
  };
};

export const updateCartItemQuantity = (cartItemId, data) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: { cartItemId, data }
});

export const updateCartItemQuantityy = (cartItemId, updatedCartItem) => {
  debugger;
  return async (dispatch) => {
    debugger;
      try {
          const response = await axios.put(`http://localhost:3001/CartItems/${cartItemId}`, updatedCartItem);
          dispatch(updateCartItemQuantity(cartItemId, response.data))
      } catch (error) {
          console.error('Error updating cart item quantity:', error);
      }
  };
};



export const addTooCart = (product)=>{
  return async (dispatch) => {
    try{
      debugger;
      const response = await axios.post(`http://localhost:3001/CartItems`, product);
      dispatch(addToCart(response.data))
    } catch (error) {
      dispatch(error.message)
    }
  }
}


export const fetchCartItems = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/CartItems?userId=${userId}`);
      dispatch(fetchCartItemsSuccess(response.data));
    } catch (error) {
      dispatch(fetchCartItemsFailure(error.message));
    }
  };
};
export const removeFromCart = (itemId) => {
  return async (dispatch) => {
    debugger;
    try {
      await axios.delete(`http://localhost:3001/CartItems/${itemId}`);
      dispatch(removeFromCartSuccess(itemId));
      console.log('Item removed from cart successfully');
    } catch (error) {
      dispatch(removeFromCartFailure(error));
      console.error('Error removing item from cart:', error);
    }
  };
};

