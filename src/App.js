import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import store from './components/Store/Store';
import Fruits from './components/Fruits/Fruits';
import SingleItem from './components/SingleItem/SingleItem';
import OurProducts from './components/OurProducts/OurProducts';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import AddressForm from './components/CheckOut/Address';
import ViewOrders from './components/CheckOut/ViewOrder';
import Categories from './components/Categories/Categories';
import Features from './components/Features/Features';
import 'bootstrap/dist/css/bootstrap.min.css';
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/items/:category' element={<Fruits/>}/>
        <Route path='/item-details/:id' element = {<SingleItem/>}/>
        <Route path='features' element={<Features/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/all' element={<OurProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/address' element={<AddressForm/>}/>
        <Route path='/view-orders' element={<ViewOrders/>}/>
      </Routes>
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
