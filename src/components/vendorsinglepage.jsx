import React from "react";
import { useParams } from "react-router-dom";
import { stores } from "./vendors";
import '../style/vendorsinglepage.css'
import image9 from '../assets/hiii.jpg';

function VendorSingle() {
    const { id } = useParams();
    const sto = stores.find((sto) => sto.id == id);

    if (!sto) {
        return <div>Store not found</div>;
    }

    return (
        
        <div className="vendor-single-container">
            
            <div className="vendor-sidebar">
                <div className="product-categories">
                    <h3>Store Product Category</h3>
                    <ul>
                        <li>Fashion</li>
                        <li>Woman Clothes</li>
                        <li>Shoes</li>
                        <li>Sports</li>
                        <li>Watch</li>
                    </ul>
                </div>

                <div className="contact-vendor">
                    <h3>Contact Vendor</h3>
                    <input type="text" placeholder="Your Name *"  required/>
                    <input type="email" placeholder="you@example.com" required/>
                    <textarea placeholder="Type your message..." required></textarea>
                    <button type="button">SEND MESSAGE</button>
                </div>
            </div>

            <div className="vendor-content">
                <div className="store-info">
                    <div className="store-image">
                        <img src={sto.image} alt={sto.name} />
                        <div className="store-details">
                            <h3>{sto.name}</h3>
                            <p>{sto.address}</p>
                            <p>{sto.rating} rating from 3 reviews</p>
                        </div>
                    </div>
                </div>

                <div className="product-area">
                    <div className="product-search">
                        <p>Products</p>
                        <div className="search-sort">
                            <input type="text" placeholder="Enter product name" />
                            <button>SEARCH</button>
                            <select>
                                <option>Default sorting</option>
                            </select>
                        </div>
                    </div>

                    <div className="product-grid">
                        <div className="product-card">
                            <img src={sto.image2} alt="Product" />
                            <p>Jdoe's Styling Watch</p>
                            <p>$22.00 - $33.00</p>
                            {/* Add rating component here */}
                            <div className="color-options">
                                {/* Add color circles here */}
                            </div>
                        </div>
                        <div className="product-card">
                            <img src={sto.image3} alt="Product" />
                            <p>John Sport Shoes</p>
                            <p>$22.00 - $55.00</p>
                            {/* Add rating component here */}
                            <div className="color-options">
                                {/* Add color circles here */}
                            </div>
                        </div>
                        <div className="product-card">
                            <img src={sto.image4} alt="Product" />
                            <p>Summer Cloth</p>
                            <p>$39.00 - $59.00</p>
                            {/* Add rating component here */}
                            <div className="color-options">
                                {/* Add color circles here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default VendorSingle;