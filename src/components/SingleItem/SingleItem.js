import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSingleItem } from './SingleAction';
import './SingleItem.css';
import { auth } from '../Config';
import { addTooCart, updateCartItemQuantityy } from '../Cart/CartActions';
import { fetchSimilarItems } from './SimilarActions';
import SimilarProducts from './SimilarProducts';

const SingleItem = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectPath, setRedirectPath] = useState('/');
    const { item, loading, error } = useSelector((state) => state.singleItem);
    const { cartItems } = useSelector((state) => state.cart);
    const { similarItems } = useSelector((state) => state.similarItems);

    useEffect(() => {
        if (params.id) {
            dispatch(fetchSingleItem(params.id));
        }
    }, [dispatch, params.id]);

    useEffect(() => {
        if (item && item.category) {
            dispatch(fetchSimilarItems(item.category));
        }
    }, [dispatch, item]);

   




    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                setEmail('');
                setPassword('');
                nav(redirectPath || '/');
            })
            .catch(() => {
                alert("Error logging in");
            });
    };
    const addCart = async () => {
        const user = auth.currentUser;
      
        if (!user) {
            setRedirectPath(`/item-details/${params.id}`);
            handleLogin();
            return;
        }
        debugger;
        const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
     

        
        if (itemIndex === -1) {
            const updatedCartItems = { ...item, quantity: 1, userId: user.uid };
            dispatch(addTooCart(updatedCartItems));
        } else {
            const existingCartItem = cartItems[itemIndex];
            debugger;
            dispatch(updateCartItemQuantityy(existingCartItem.id, { ...existingCartItem, quantity: existingCartItem.quantity+1 }));
        }
    };
    
    const filteredSimilarItems = similarItems.filter(similarItem => similarItem.id !== item.id);
    
    return item ? ( 
        <div className='containerbody'>
        <div className="body">
            <div className="containerrr">
                <div className='imgBx'>
                    <img src={item.image} alt={item.name} />
                </div>
                <div className='detailss'>
                    <h2>{item.name} <br />
                        <span>Benefits</span>
                    </h2>
                    <p>
                        <ul>
                            <li>Organics are nutritious</li>
                            <li>Organics may be good for weight loss</li>
                            <li>Organics may be good for bone health</li>
                            <li>They're linked to a lower risk of diabetes</li>
                        </ul>
                    </p>
                    <h4>Express Deleviry : Available</h4>
                    <h3> Rs. {item.price} / Per KG</h3>
                    <button onClick={addCart} >ADD TO CART</button>
                </div>
            </div>
            
        </div>
            <SimilarProducts similarItems={filteredSimilarItems} />
        </div>
    ) : null;
}

export default SingleItem;
