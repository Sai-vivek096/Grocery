import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './OurProducts.css'
import { fetchItems } from '../Fruits/FruitsActions';
import { Link } from 'react-router-dom';

const OurProducts = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);

  useEffect(() => {
      dispatch(fetchItems(null));
    
  }, [dispatch]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  
  return (
    <div className='loggy'> 
    <div className="container">
      {items.map((item) => (
          <div key={item.id} className="cardd">
            <Link to={`/item-details/${item.id}`} key={item.id}>
          <img src={item.image} alt='' className="card-image"/>
          <div className="details">
            <h4>Name: {item.name}</h4>
            <h6>Price: ${item.price}</h6>
          </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OurProducts;
