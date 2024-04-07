import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress, fetchAddresses } from './AddressActions'; 
import Address from './Address';
import './CheckOut.css'
import ConfirmOrder from './ConfirmOrder';
import { placeOrder } from './OrderActions';
import { auth } from '../Config';

const CheckOut = () => {
  const { addresses, loading, error } = useSelector((state) => state.address);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [editAddress, setEditAddress] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user){
        setUser(user);
        dispatch(fetchAddresses(user.uid))
      } else {
        setUser(null);
        dispatch(fetchAddresses(null))
      }
    })
    return () => unsubscribe;
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteAddress(id));
  };

  const handleEdit = (address) => {
    setShowAddForm(false);
    setEditAddress(address);
  };

  const handleCloseEdit = () => {
    setEditAddress(null);
  };

  const handleToggleAddForm = (e) => {
    e.preventDefault(); 
    setEditAddress(null);
    setShowAddForm((prev) => !prev); 
  };

  const handleAddressSelection = (address) => {
    setSelectedAddress(address);
  };

  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.price * cartItem.quantity;
    });
    return total;
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (!selectedAddress) {
      console.error('Please select an address to proceed');
      return;
    }

    const orderDetails = {
      items: cartItems,
      address: selectedAddress,
      totalAmount: calculateTotalAmount(),
      userId: user.uid,
    };

    try {
      await dispatch(placeOrder(orderDetails)); 
      setSubmitted(true);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  }; 

  return (
    <div className='checkoutt'>
    <div className="containerr">
      {!submitted ? ( 
        <>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {!loading && !error && (
            <>
              {editAddress && (
                <Address address={editAddress} isEditing onClose={handleCloseEdit} />
              )}
              {showAddForm && (
                <Address onClose={() => setShowAddForm(false)} />
              )}
              <form className="address-card">
                <div className='btn-add'>
                  <h3 className='h3s'>Select Your Address:</h3>
                  <button className='Place-btnn' onClick={handleToggleAddForm}>
                    {showAddForm ? 'Cancel Add Address' : 'New Address'}
                  </button>
                </div>
                <div className="address-selection-box">
                  {addresses.map((address, index) => (
                    <div key={index} className="address-item">
                      <input type="radio" id={`address${index}`} name="selectedAddress" onChange={() => handleAddressSelection(address)} />
                      <label htmlFor={`address${index}`}>Name: {address.name}</label>
                      <p>Address: {address.addressLine1}</p>
                      <p>Phone: {address.phoneNumber}</p>
                      <p>Pincode: {address.pincode}</p>
                      <button type="button" className='edit' onClick={() => handleEdit(address)}>Edit</button>
                      <button type='button' className='edit' onClick={() => handleDelete(address.id)}>Delete</button>
                    </div>
                  ))}
                </div>
                <div className='your'>
                {selectedAddress && <button type="submit" className='Place-btn' onClick={handleSubmitOrder}>Place Your Order</button>}
                </div>
              </form>
            </>
          )}
        </>
      ) : (
        <ConfirmOrder selectedAddress={selectedAddress} /> 
      )}
    </div>
    </div>
  );
};

export default CheckOut;
