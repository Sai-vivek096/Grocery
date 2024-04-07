import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
     <div className="categories" id="categories">
    <h1 className="heading">
     Products Categories
    </h1>
    <div className="box-container">
      <div className="box">
        <img src="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg" alt="" />
        <h3>Vegetables</h3>
        <p>upto 45% off</p>
        <Link to = '/items/vegetables'>
        <button type="button" className="btn">Shop Now</button>
        </Link>
      </div>

      <div className="box">
        <img src="https://w0.peakpx.com/wallpaper/647/931/HD-wallpaper-fresh-fruits-nature-food-fresh-fruits.jpg" alt="" />
        <h3>Fresh Fruits</h3>
        <p>upto 45% off</p>
        <Link to='/items/fruits'>
        <button type="button" className="btn">Shop Now</button>
        </Link>
      </div>

      <div className="box">
        <img src="https://img.freepik.com/premium-photo/various-fresh-dairy-products-milk-sour-cream-cottage-cheese-yogurt-butter-light-stone_70626-15649.jpg" alt="" />
        <h3>Dairy Products</h3>
        <p>upto 45% off</p>
        <Link to='/items/dairy'>
        <button type="button" className="btn">Shop Now</button>
        </Link>
      </div>

    </div>
  </div>
  )
}

export default Categories
