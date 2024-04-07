import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import './CartIcon.css'
 
const CartIcon = () => {
  const { cartItems, loading } = useSelector((state) => state.cart);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="cart-icon">
      <FaShoppingCart />
      {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
    </div>
  );
};

export default CartIcon;
 