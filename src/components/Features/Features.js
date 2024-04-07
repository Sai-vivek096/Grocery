import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          Our Features
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="https://watermark.lovepik.com/photo/20211208/large/lovepik-fruits-and-vegetables-poster-picture_501615020.jpg" alt="" />
            <h3>Fresh and Organic</h3>
            <p> The production of food without the use of synthetic chemicals or genetically modified components</p>
            <button className="btn">Read More</button>
          </div>
          <div className="box">
            <img src="https://www.pngitem.com/pimgs/m/22-222412_home-delivery-hd-png-download.png" alt="" />
            <h3>Free Delivery</h3>
            <p>Users to order groceries online and have them delivered to their doorstep</p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
