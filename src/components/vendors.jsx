import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, faArrowRight, faBars, faTh, faPhone } from "@fortawesome/free-solid-svg-icons";
import '../style/vendors.css';

// Import your images
import image1 from '../assets/vendor1.webp';
import image2 from '../assets/vendor2.jpg';
import image3 from '../assets/vendor3.jpg';
import image4 from '../assets/vendor4.jpg';
import image5 from '../assets/vendor5.jpg';
import image6 from '../assets/vendor6.jpg';
import avatar1 from '../assets/avatar1.webp';
import avatar2 from '../assets/vendor2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar4 from '../assets/avatar4.jpg';
import avatar5 from '../assets/avatar5.jpg';
import avatar6 from '../assets/avatar6.jpg';
import mage from '../assets/shop5.jpg'
import migi from '../assets/shop7.jpg'
import magu from '../assets/girl5.jpg'
import { useNavigate } from 'react-router-dom';

export const stores = [
  {
      id: 1,
      name: "John Doe's Store",
      rating: 4.5,
      address: "Central Park, New York, New York, United States (US)",
      image: image1,
      avatar: avatar1,
      image2: mage,
      image3: migi,
      image4: magu
  },
  {
      id: 2,
      name: "Jessica's Store",
      rating: 4,
      address: "Central Park, New York, New York, United States (US)",
      image: image2,
      avatar: avatar2,
      image2: mage,
      image3: migi,
      image4: magu

  },
  {
      id: 3,
      name: "Santa Monica's Store",
      rating: 5,
      address: "Central Park, New York, New York, United States (US)",
      image: image3,
      avatar: avatar3,
      image2: mage,
      image3: migi,
      image4: magu

  },
  {
      id: 4,
      name: "Digital Good's Store",
      rating: 4.5,
      address: "Central Park, New York, New York, United States (US)",
      image: image4,
      avatar: avatar4,
      image2: mage,
      image3: migi,
      image4: magu

  },
  {
      id: 5,
      name: "The Glass Store",
      rating: 4,
      address: "Central Park, New York, New York, United States (US)",
      image: image5,
      avatar: avatar5,
      image2: mage,
      image3: migi,
      image4: magu

  },
  {
      id: 6,
      name: "Josh Doe's Store",
      rating: 5,
      address: "Central Park, New York, New York, United States (US)",
      phone: "123456789",
      image: image6,
      avatar: avatar6,
      image2: mage,
      image3: migi,
      image4: magu

  }
];

const Vendors = () => {

   

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} />);
        }

        // Add half star if needed
        if (hasHalfStar) {
            stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} />);
        }

        // Add empty stars to fill out the rating to 5 stars
        const emptyStarsNeeded = 5 - stars.length;
        for (let i = 0; i < emptyStarsNeeded; i++) {
            stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStar} style={{ color: '#ccc' }} />);
        }

        return <div className="star-container">{stars}</div>;
    };
    const stor = useNavigate();
    const handleStor =(id)=> {
        stor(`/vendorsible/${id}`)}
    return (
        <div className="store-list-container">
            <h2 className="store-list-title">Store List</h2>
            <div className="store-list-header">
                <p>Total stores showing: {stores.length}</p>
                <div className="store-list-options">
                    <button className="filter-button" onClick={()=>handleStor(store.id)}>  <FontAwesomeIcon icon={faBars} style={{ marginRight: '5px' }} />Filter</button>
                    <div className='sorting'>
                        <p>Sort by:</p> <select>
                            <option>Most Recent</option>
                            <option>Name</option>
                        </select>
                    </div>
                    <div className="view-icons">
                        <FontAwesomeIcon icon={faTh} style={{ marginRight: '5px' }} />
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
            <div className="stores-grid">
                {stores.map(store => (
                    <div className="store-card" key={store.id}>
                        <div className="store-image">
                            <img src={store.image} alt={store.name} />
                            <div className="store-details">
                                <h3>{store.name}</h3>
                                {renderStars(store.rating)}
                                <p className="store-address">{store.address}</p>
                                {store.phone && (
                                    <p className="store-phone">
                                        <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
                                        {store.phone}
                                    </p>
                                )}
                            </div>
                            <div className="store-button">
                                <FontAwesomeIcon icon={faArrowRight} onClick={()=>handleStor(store.id)}/>
                            </div>
                            <div className="store-avatar">
                                <img src={store.avatar} alt="store avatar" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vendors;