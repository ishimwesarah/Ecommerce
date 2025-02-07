
import React from "react";
import image1 from '../assets/bootle.jpg';
import image2 from '../assets/alexa.jpg';
import image3 from '../assets/headset.jpg';
import image4 from '../assets/body.jpg';
import image5 from '../assets/electronic.jpg';
import image6 from '../assets/pc.jpg';
import image7 from '../assets/watch.jpg';
import image8 from '../assets/wom.jpg';

import pict1 from '../assets/girl1.webp';
import pict2 from '../assets/girl2.webp';
import pict3 from '../assets/girl3.webp';
import pict4 from '../assets/girl5.webp';
import pict5 from '../assets/girl5.jpg';
import pict6 from '../assets/girl6.jpg';
import vendo from '../assets/vendor4.jpg'
import vendo1 from '../assets/home.jpg'
import vendo2 from '../assets/home1.jpg'
import vendo3 from '../assets/vendor3.jpg'
import vendo4 from '../assets/home2.jpg'
import vendo5 from '../assets/vendor6.jpg'









import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "../style/Home.css"; 

const stores = [
  {
      id: 1,
      name: "SANTA MONICA'S STORE",
      rating: 4.5,
      address: "New york, NY",
      image: vendo2,
     
  },
  {
      id: 2,
      name: "Josh Doe's Store",
      rating: 4,
      address: "New york, NY",
      image: vendo,
      

  },
  {
      id: 3,
      name: "Digital Good's Store",
      rating: 5,
      address: "New york, NY",
      image: vendo1,
     

  },
  {
      id: 4,
      name: "Jesicca's Store",
      rating: 4.5,
      address: "New york, NY",
      image: vendo3,
      

  },
  {
      id: 5,
      name: "The Glass Store",
      rating: 4,
      address: "New york, NY",
      image: vendo4,
     
  },
  {
      id: 6,
      name: "Josh Doe's Store",
      rating: 5,
      address: "New york, NY",
      phone: "123456789",
      image: vendo5,
     

  }
];

const pagelsa = [
  {
    id: 1,
    image:pict1,
   
  },
  {
    id: 2,
    image:pict2,
  },
  {
    id: 3,
    image:pict3,
  },
  {
    id: 4,
    image:pict4,
  },
  {
    id: 5,
    image:pict5,
  },
  {
    id: 6,
    image:pict6,
  }
]
  
const Home = () => {
  return (
    <div className="home-container">
      <div className="top-section">
        <div className="sidebar">
          <ul>
            <li><a href="/Shop" style={{ textDecoration: 'none' }}>Electronics</a></li>
            <li><a href="/Shop" style={{ textDecoration: 'none' }}>Computer Gadget</a></li>
            <li><a href="/Shop"> Fashion </a></li>
            <li><a href="/Shop"> Body Lotion</a></li>
            <li><a href="/Shop"> Woman Clothes</a></li>
            <li><a href="/Shop"> Shoes </a></li>
            <li><a href="/Shop">Watches</a></li>
          </ul>
        </div>
        <div className="hero">
          <h2>Explore our latest and greatest electronics</h2>
          <button className="shop-now"><a href="/shop" style={{ textDecoration: 'none' }}>SHOP NOW </a> </button>
          
          <section className="popular-categories">
            <h2>Popular Categories</h2>
            <div className="categories-grid">
                <div className="category"><img src={image4} alt="Body Lotion" /><p>Body Lotion</p></div>
                <div className="category"><img src={image1} alt="Sports" /><p>Sports</p></div>
                <div className="category"><img src={image6} alt="Computer Gadget" /><p>Computer Gadget</p></div>
                <div className="category"><img src={image5} alt="Electronics" /><p>Electronics</p></div>
                <div className="category"><img src={image7} alt="Watch" /><p>Watch</p></div>
                <div className="category"><img src={image8} alt="Woman Clothes" /><p>Woman Clothes</p></div>
          </div>
          </section>
        </div>
        
      </div>

      <section className="new-arrivals">
        <h3>New Arrival Products</h3>
        <div className="products-grid">
          <div className="product">
            <img src={image1} alt="All In One Bottle"/>
            <p className="title">All In One Bottle</p>
            <p className="price">$22.00 - $35.00</p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </div>

          <div className="product">
            <img src={image2} alt="Amazon Alexa" />
            <p className="title">Amazon Alexa</p>
            <p className="price">$49.00 - $60.00</p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>

          <div className="product">
            <img src={image3} alt="Headset Gamer Legion" />
            <p className="title">Headset Gamer Legion</p>
            <p className="price">$22.00 - $55.00</p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </div>
        </div>
        <button className="shop-now">SHOP NOW</button>
      </section>
      
      <section className="vendor-list">
      <h2>Our vendor List</h2>
      <div className="stores-grid">
       
                     {stores.map(store => (
                         <div className="store-card" key={store.id}>
                             <div className="store-image">
                                 <img src={store.image} alt={store.name} />
                                 <div>{store.name}</div>
                                 <div>{store.address}</div>

                                 </div>
                                 </div>

                                ))}
                                 </div>
                              
                                
      </section>
      <h1 className="headu">Follow us on @instagram</h1>
      <section >
        <div className="array-container">
        {pagelsa.map((pic) => (
        <div key={pic.id}>
          <img src={pic.image} alt={pic.title} />
          </div>
          
        ))}
        </div>
      </section>
    </div>
        );
};

export default Home;