import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "./Shop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import image2 from '../assets/alexa.jpg';
import image3 from '../assets/headset.jpg';
import '../style/shopsingle.css'

function ShopSingle() {
    const { id } = useParams();
    const product = products.find((p) => p.id == id);

    if (!product) {
        return <div className="error-message">Product not found</div>;
    }

    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    const relatedProducts = [
        { id: 1, title: "John Sport Shoes", price: "$22.00 - $55.00", image: image2 },
        { id: 2, title: "Santa Monica Shoes", price: "$22.00 - $55.00", image: image3 }
    ];

    return (
        <div className="shop-single-container">
            <div className="product-view">
                <div className="product-image">
                    <img src={product.image} alt={product.title} />
                </div>

                <div className="product-details">
                    <h1>{product.title}</h1>
                    <div className="product-rating">5.0 (1 review)</div>
                    <div className="product-price">{product.price}</div>
                    <p className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <div className="quantity-controls">
                        <button onClick={decreaseQuantity}>-</button>
                        <input type="text" value={quantity} readOnly />
                        <button onClick={increaseQuantity}>+</button>
                    </div>

                    <button className="add-to-cart-btn">Add to Cart</button>

                    <div className="wishlist">
                        <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
                    </div>
                </div>
            </div>

            <div className="related-products">
                <h2>Related Products</h2>
                <div className="related-items">
                    {relatedProducts.map((rp) => (
                        <div className="related-product" key={rp.id}>
                            <img src={rp.image} alt={rp.title} />
                            <p>{rp.title}</p>
                            <p>{rp.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShopSingle;
