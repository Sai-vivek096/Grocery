import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Config';
import Login from '../Login/Login';
import {useDispatch} from 'react-redux'
import CartIcon from './CartIcon';
import { fetchCartItems } from '../Cart/CartActions';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(null);
    const nav = useNavigate();
    const dispatch = useDispatch()
    const [user, setUser] = useState()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

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

    const handleLogout = (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
            nav('/');
        }).catch((error) => {
            console.error('Error logging out:', error);
        });
    }

    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <Link to='/'>
                    <img src={logo} alt='flipcart-logo' className='navbar-logo' />
                </Link>
                <div className='navbar-search'>
                <Link to='/'>
                <button className='navbar-btnn'><h4>Home</h4></button>
                </Link>
                    <Link to='/features'>
                    <button  className='navbar-btnn'><h4>Features</h4></button>
                    </Link>
                    <Link to='/categories' className='user-email'>
                    <button className='navbar-btnn'><h4>Categories</h4></button>
                    </Link>
                    {loggedIn !== null && (loggedIn ? (
                        <>
                           <button className='navbar-btnn' onClick={handleLogout}><h4>LogOut</h4></button>
                        </>
                    ) : (
                        <button className='navbar-btnn' onClick={() => setOpen(true)}><h4>Login</h4></button>
                    ))}
                    <div className='navbar-bcs'>
                        <Link to='/all'>
                        <button className='navbar-btnn'> <h4>Our Products</h4></button>
                        </Link>
                    </div>
                    <div className='navbar-cart'>
                        <div className='cart-icon'>
                        <Link to='/cart'>
                            <CartIcon/>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
            <Login open={open} setOpen={setOpen} loggedIn={loggedIn} />
        </div>
    );
};

export default Navbar;