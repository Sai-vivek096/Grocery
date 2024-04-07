import React from 'react';
import { useSelector } from 'react-redux';
import './ConfirmOrder.css'
import { Link } from 'react-router-dom';

const ConfirmOrder = ({ selectedAddress }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { placingOrder, placingOrderError } = useSelector((state) => state.order);


  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.price * cartItem.quantity;
    });
    return total;
  };

  const handleViewOrder = async () => {
    if (!selectedAddress || cartItems.length === 0) {
      console.error('Address is required and cart should not be empty to place an order');
      return;
       
    }
    
  };

  return (
    <div className='order'>
      <div className="confirm-order-container">
        <Link to='/view-orders'>
        <button 
          disabled={placingOrder} 
          onClick={handleViewOrder} 
          className='Place-btn'
          style={{ position: 'absolute', top: '20px', right: '20px' }}
        >
          {placingOrder ? 'Placing Order...' : 'View Order'}
        </button></Link>
        {placingOrderError && <p>Error placing order: {placingOrderError}</p>}
        <div className="card">
          <h2>Your Order</h2>
          <div className="thank-you">
            <p>Thank you </p>
          </div>
          <div className='confirm'>
          <div className="shipping-address">
            <h3>Shipping Address:</h3>
            {selectedAddress ? (
              <div className='content'>
                <p>Name: {selectedAddress.name}</p>
                <p>Phone: {selectedAddress.phoneNumber}</p>
                <p>Address: {selectedAddress.addressLine1}</p>
                <p>Pincode: {selectedAddress.pincode}</p>
              </div>
            ) : (
              <p>No address found</p>
            )}
          </div>
          <div className="cart-items">
            <h3>Item Details:</h3>
            {cartItems.map((cartItem) => (
              <div key={cartItem.id}>
                <p>
                  {cartItem.name} - ${cartItem.price}
                </p>
                <p>
                  Quantity: {cartItem.quantity}
                </p>
              </div>
            ))}
          </div>
          </div>
          <div className="total-amount">
            <h3>Total Amount: ${calculateTotalAmount()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
