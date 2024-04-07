import React from 'react'
import './Fruits.css'

const Items = ({items}) => {
  return (
    <div className='backbg'>
    <div className="container">
      <div key={items.id} className="carddd">
        <img src={items.image} alt='' className="card-image"/>
        <div className="details">
          <h4>Name: {items.name}</h4>
          <h6>Price: ${items.price}</h6>
        </div>
      </div>
  </div>  
  </div>
  )
}

export default Items
