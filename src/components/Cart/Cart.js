import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import empty from './empty.png'
import { decrementQuantity, fetchCartItems, incrementQuantity, removeFromCart } from './CartActions';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Config';

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();
  const nav = useNavigate()
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        dispatch(fetchCartItems(user.uid));
      } else {
        setUser(null);
        dispatch(fetchCartItems(null));
      }
    });

    return  unsubscribe;
  }, [dispatch]);
  
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  if (!user) {
    return  nav('/');
  }

  return (
    <div className='contain'>
      <div className='Cart-items'> 
        <div className='Cart-container'>
          <div className='Cart-content'>
            <div>
              {cartItems.length > 0 ? (
                <div>
                  {cartItems.map((cartItem, index) => (
                    <div key={index} className='Cart-items'>
                      <div className='Cart-item--left'>
                        <img src={cartItem.image} alt='img' />
                      </div>
                      <div className='Cart-item--right'>
                        <div className='cart-detail'>
                          <h3>Name: {cartItem.name}</h3>
                          <p>Price: ${cartItem.price}</p>
                        </div>
                        <div className="quantity-controls">
                          <button className="quantity-control" onClick={() => handleDecrement(cartItem.id)}>-</button>
                          <span className="quantity">{cartItem.quantity}</span>
                          <button className="quantity-control" onClick={() => handleIncrement(cartItem.id)}>+</button>
                        </div>
                        <button
                          type='button'
                          className='Cart-item-button'
                          onClick={() => handleRemoveFromCart(cartItem.id)}>
                          Remove From Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <img src={empty} alt=''/>
              )}
            </div>
            {cartItems.length > 0 && (
              <div className='Cart-sidebar'>
                <div className='Cart-subtotal'>
                  <h3 className='total'>Subtotal</h3><br/>
                  <h4>Total Amount ${calculateSubtotal()}</h4>
                </div>
                <Link to='/checkout' >
                  <div className='out'>
                  <button type='button' className='check'>
                    CheckOut
                  </button>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
