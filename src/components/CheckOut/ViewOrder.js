import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from './OrderActions';
import './ViewOrder.css';
import { auth } from '../Config';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const View = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        dispatch(fetchOrders(user.uid));
      } else {
        setUser(null);
        dispatch(fetchOrders(null));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className='viewordr'>
    <Accordion>
    <div className='Accor'>
    {orders.map((order) => (
        <AccordionItem  key={order.id}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Order ID: {order.id}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                {order.items.map((item) =>(
                    
                    <li key={item.id} >
                        <img
                            src={item.image} 
                            alt={item.name} 
                            style={{ width: '100px', marginRight: '20px', padding: '10px' }} 
                            onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default-image.jpg' }}
                          />
                         {item.name} - Quantity: {item.quantity} - Price: ${item.price}
                    </li>
                ))}
            </AccordionItemPanel>
            <AccordionItemPanel>
                Total Amount: ${order.totalAmount}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</div>
</Accordion>
</div>
);
};

export default View;
