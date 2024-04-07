import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'; 
import './SimilarProducts.css';

const SimilarProducts = ({ similarItems }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };

    return (
        <div className="similar-products-container">
            <h1>Similar Products</h1>
            <Carousel className='carousel'
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={500}
                keyBoardControl={true}
                userCSS={false}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['tablet', 'mobile']}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {similarItems.map(item => (
                    <Link to={`/item-details/${item.id}`} key={item.id} className="product-link">
                        <div className="product-card">
                            <img src={item.image} alt={item.name} />
                            <div className="details">
                                <h4>Name: {item.name}</h4>
                                <h6>Price: ${item.price}</h6>
                            </div>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    );
};

export default SimilarProducts;
