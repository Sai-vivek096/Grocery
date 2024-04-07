import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from './FruitsActions';
import { Link, useParams } from 'react-router-dom';
import Items from './Items';

const Fruits = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { items, loading, error } = useSelector((state) => state.items);

  useEffect(() => {
    if (params.category) {
      dispatch(fetchItems(params.category));
    }
  }, [dispatch, params.category]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
 
  
  return (
    <div className="container">
      {items.map((item, index) => (
            <Link key={index} to ={`/item-details/${item.id}`}>
         <Items items={item}/>
            </Link>
      ))}
    </div>
  );
};

export default Fruits;
