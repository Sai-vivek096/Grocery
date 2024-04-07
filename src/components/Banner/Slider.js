import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}>
      
    <SwiperSlide>
    <Link to='/items/fruits'>
        <img src='https://cdn.vectorstock.com/i/500p/45/21/summer-sale-banner-with-pieces-ripe-fruit-vector-27914521.jpg' alt='img' style={{width: "100%"}}/>
    </Link>
    </SwiperSlide>
    <SwiperSlide>
    <Link to='/items/dairy'>
        <img src='https://www.mynestle.in/media/wysiwyg/Updated_Banners/Clp/Milk_Products/everyday-d1.jpg' alt='img' style={{width: "100%"}}/>
    </Link>
    </SwiperSlide>
    <SwiperSlide>
    <Link to='/items/vegetables'>
        <img src='https://static.vecteezy.com/system/resources/previews/028/243/822/large_2x/assortment-of-fresh-vegetables-food-background-with-assortment-of-fresh-organic-vegetables-fresh-vegetables-wide-banner-generative-ai-photo.jpeg' alt='img' style={{width: "100%"}}/>
    </Link>
    </SwiperSlide>
  </Swiper>
  )
}

export default Slider
