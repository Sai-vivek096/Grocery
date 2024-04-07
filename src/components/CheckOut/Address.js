import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAddress, updateEditAddress } from './AddressActions';
import { auth } from '../Config';
import './Address.css'

const AddressForm = ({ address, isEditing, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    addressLine1: '',
    pincode: ''
  });

  useEffect(() => {
    if (isEditing && address) {
      setFormData({
        name: address.name,
        phoneNumber: address.phoneNumber,
        addressLine1: address.addressLine1,
        pincode: address.pincode
      });
    }
  }, [address, isEditing]);

  function GetUserUid() {
    const [uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged(user => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
    return uid;
  }

  const uid = GetUserUid();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!uid) {
      console.error("User not logged in");
      return;
    }

    const newAddress = {
      userId: uid,
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      addressLine1: formData.addressLine1,
      pincode: formData.pincode
    };

    try {
      if (isEditing && address) {
        dispatch(updateEditAddress(address.id, newAddress));
        console.log("Address updated successfully");
      } else {
        dispatch(updateAddress(newAddress));
        console.log("Address added successfully");
      }
      onClose();
    } catch (error) {
      console.error('Error adding/updating address:', error);
    }
  };

  return (
    <div className="address-form-container">
      <div className="address-form-card">
        <h3 className='heading'>{isEditing ? 'Update Address:' : 'Enter your Details:'}</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder='Enter your name..' name="name" value={formData.name} onChange={handleChange} />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" placeholder='Enter Number..' name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          <label htmlFor="addressLine1">Address:</label>
          <input type="text" id="addressLine1" placeholder='Enter your Address..' name="addressLine1" value={formData.addressLine1} onChange={handleChange} />
          <label htmlFor="pincode">Pincode:</label>
          <input type="text" id="pincode" name="pincode" placeholder='Enter Pincode..' value={formData.pincode} onChange={handleChange} />
          <div className="button-container">
            <button type="submit" className="save-address-btn">{isEditing ? 'Update Address' : 'Save Address'}</button>
            {isEditing ? (
              <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
            ) : (
              <Link to='/checkout'>
                <button type='button' onClick={onClose} className="proceed-btn">Close</button>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
