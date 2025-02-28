import React from 'react';
import '../Dashboard/dashboard-styles/product.css';
import image1 from '../assets/girl1.webp';
import image2 from '../assets/handbag.jpg';
import image3 from '../assets/vendor6.jpg';
import image4 from '../assets/cap.jpg';
import image5 from '../assets/vendor5.jpg';
import image6 from '../assets/shop6.jpg';


const ProductList = () => {
  const products = [
    {
      name: 'Black T-shirt',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 80.00,
      itemsLeft: 486,
      itemsSold: 155,
      category: 'Fashion',
      rating: 4.5,
      reviews: 55,
      image: image1,
    },
    {
      name: 'Olive Green Leather Bag',
      sizes: ['S', 'M'],
      price: 136.00,
      itemsLeft: 784,
      itemsSold: 674,
      category: 'Hand Bag',
      rating: 4.1,
      reviews: 143,
      image: image2,
    },
    {
      name: 'Women Golden Dress',
      sizes: ['S', 'M'],
      price: 219.00,
      itemsLeft: 769,
      itemsSold: 180,
      category: 'Fashion',
      rating: 4.4,
      reviews: 174,
      image: image3,
    },
    {
      name: 'Gray Cap For Men',
      sizes: ['S', 'M', 'L'],
      price: 76.00,
      itemsLeft: 571,
      itemsSold: 87,
      category: 'Cap',
      rating: 4.2,
      reviews: 23,
      image: image4,
    },
    {
      name: 'Dark Green Cargo Pent',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 110.00,
      itemsLeft: 241,
      itemsSold: 342,
      category: 'Fashion',
      rating: 4.4,
      reviews: 109,
      image: image5,
    },
    {
      name: 'Orange Multi Color Headphone',
      sizes: ['S', 'M'],
      price: 231.00,
      itemsLeft: 821,
      itemsSold: 231,
      category: 'Electronics',
      rating: 4.2,
      reviews: 200,
      image: image6,
    },
  ];

  return (
    <div className="product-list-container">
      <div className="header">
        <h2>All Product List</h2>
        <div className="header-actions">
          <button className="add-product-buttony">Add Product</button>
          <select className="month-select">
            <option>This Month</option>
          </select>
        </div>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Product Name & Size</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="product-info">
                  <img src={product.image} alt={product.name} />
                  <div className="product-details">
                    <p className="product-name">{product.name}</p>
                    <p className="product-sizes">
                      Size: {product.sizes.join(', ')}
                    </p>
                  </div>
                </div>
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                {product.itemsLeft} Item Left
                <br />
                {product.itemsSold} Sold
              </td>
              <td>{product.category}</td>
              <td>
                <span className="rating">
                  <span className="star">★</span> {product.rating.toFixed(1)}
                </span>{' '}
                {product.reviews} Review
              </td>
              <td className="actions">
                <button className="action-button view">
                  <i className="fa fa-eye"></i>
                </button>
                <button className="action-button edit">
                  <i className="fa fa-pencil"></i>
                </button>
                <button className="action-button delete">
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;