import React, { useState } from 'react'; // Import useState
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faBars, faTh, faHeart } from "@fortawesome/free-solid-svg-icons"; // Import heart icon

import { useNavigate } from 'react-router-dom';
import image1 from '../assets/bootle.jpg';
import image2 from '../assets/alexa.jpg';
import image3 from '../assets/headset.jpg';
import image4 from '../assets/shop4.jpg';
import image5 from '../assets/shop5.jpg';
import image6 from '../assets/shop6.jpg';
import image7 from '../assets/shop7.jpg';
import image8 from '../assets/shop8.jpg';
import image9 from '../assets/hiii.jpg';
import image10 from '../assets/shop9.jpg';
import '../style/Shop.css';
  
  const categories = [
    { name: 'Body Lotion', count: 1 },
    { name: 'Computer Gadget', count: 3 },
    { name: 'Electronics', count: 5 },
    { name: 'Fashion', count: 3 },
    { name: 'General', count: 1 },
    { name: 'Shoes', count: 2 },
    { name: 'Sports', count: 3 },
    { name: 'Watch', count: 1 },
    { name: 'Woman Clothes', count: 3 },
];

// Color Data
const colors = [
    "#e0e0e0",
    "#d45500",
    "#4a94d6",
    "#a0a0a0",
    "#8c5b2d"
];

// Rating Data
const ratings = [5, 4, 3]; // Ratings from 5 stars to 3 stars

// Product Data
export const products = [
    {
        id: 1,
        title: "All In One Bottle",
        price: "$22.00 - $55.00",
        rating: 4.5,
        image: image1,
        colors: ["#8c5b2d", "#43674b", "#e0e0e0"]
    },
    {
        id: 2,
        title: "Amazon Alexa",
        price: "$49.00 - $69.00",
        rating: 3,
        image: image2,
        colors: ["#e0e0e0"]
    },
    {
        id: 3,
        title: "Headset Gamer Legion",
        price: "$22.00 - $55.00",
        rating: 4,
        image: image3,
        colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"]
    },
    {
        id: 4,
        title: "Headset Gamer Legion Plus",
        price: "$22.00 - $55.00",
        rating: 4,
        image: image4,
        colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"]
    },
    {
        id: 5,
        title: "Jdoe's Styling Watch",
        price: "$22.00 - $33.00",
        rating: 5,
        image: image5,
        colors: ["#4a94d6", "#e0e0e0"]
    },
    {
        id: 6,
        title: "Jessi Cam Recorder",
        price: "$22.00 - $55.00",
        rating: 4,
        image: image6,
        colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"]
    },
    {
        id: 7,
        title: "John Sport Shoes",
        price: "$22.00 - $55.00",
        rating: 5,
        image: image7,
        colors: ["#e0e0e0", "#a0a0a0", "#d45500"]
    },
    {
        id: 8,
        title: "Mouse Razer 3000DPI",
        price: "$22.00 - $55.00",
        rating: 4,
        image: image8,
        colors: ["#8c5b2d", "#e0e0e0", "#a0a0a0"]
    },
    {
        id: 9,
        title: "Santa Monica Facial Cream",
        price: "$22.00 - $55.00",
        rating: 4,
        image: image10,
        colors: ["#d45500", "#8c5b2d", "#e0e0e0"]
    }
];

const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} />);
    }

    if (hasHalfStar) {
        stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} />);
    }

    const emptyStarsNeeded = 5 - stars.length;
    for (let i = 0; i < emptyStarsNeeded; i++) {
        stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} style={{ color: '#ccc' }} />);
    }

    return <div className="star-container">{stars}</div>;
};


const Shop = () => {
    const shoper = useNavigate();
    const handleShoper =(id)=> {
        shoper(`/shopping/${id}`)
    }

    const [hoveredProductId, setHoveredProductId] = useState(null);

  

    return (
        <div className="shop-container">
            <div className="shop-header">
                <div className='top-image'>
                    <img src={image9} alt="Shop Header" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    <h2 className="shop-title-overlay">Shop</h2>
                </div>
            </div>

            <div className="shop-content">
                <div className="filters">
                    <div className="filter-group">
                        <h3>Categories</h3>
                        <ul>
                            {categories.map((category, index) => (
                                <li key={index}>
                                    {category.name} <span>({category.count})</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="filter-group">
                        <h3>Color</h3>
                        <div className="color-filter">
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    className="color-circle"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Rating</h3>
                        <div className="rating-filter">
                            {ratings.map(rating => (
                                <div key={rating}>
                                    {Array.from({ length: rating }, (_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} />
                                    ))}
                                    {Array.from({ length: 5 - rating }, (_, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#ccc" }} />
                                    ))}
                                    <span>(8)</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>Price</h3>
                        <div className="price-filter">
                            <div className='price-slider-container'>
                                <input type="range" min="0" max="79" />
                                <div className="price-range">
                                    <span>$0</span> <span>$79</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="products">
                    <div className="products-header">
                        <p>Showing 1-9 of 13 results</p>
                        <div className="sorting">
                            <select>
                                <option>Default sorting</option>
                                <option>Sort by Price</option>
                            </select>
                            <div className="view-icons">
                                <FontAwesomeIcon icon={faBars} style={{ marginRight: '5px' }} />
                                <FontAwesomeIcon icon={faTh} />
                            </div>
                        </div>
                    </div>

                    <div className="products-grid">
                        {products.map(product => (
                            <div
                                className="product"
                                key={product.id}
                                onMouseEnter={() => setHoveredProductId(product.id)}
                                onMouseLeave={() => setHoveredProductId(null)}
                            >
                                <div className="product-image-container">
                                    <img src={product.image} alt={product.title} />
                                    {hoveredProductId === product.id && (
                                        <div className="product-overlay">
                                            <div className="product-overlay-buttons">
                                                <button className="select-options-button" onClick={()=>handleShoper(product.id)}>SELECT OPTIONS</button>
                                                <button className="quick-view-button" onClick={()=>handleShoper(product.id)}>QUICK VIEW</button>
                                            </div>
                                            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                                        </div>
                                    )}
                                </div>

                                <p className="product-title">{product.title}</p>
                                <p className="product-price">{product.price}</p>
                                {renderStars(product.rating)}
                                <div className='color-options'>
                                    {product.colors.map((color, index) => (
                                        <div
                                            key={index}
                                            className='color-option'
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='pagination'>
                        <span>1</span> <span>2</span> <span style={{ color: "#ccc" }}>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;