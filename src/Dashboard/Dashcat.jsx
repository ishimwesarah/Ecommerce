import React from 'react';

import '../Dashboard/dashboard-styles/dashcat.css'
import image1 from '../assets/vendor6.jpg'
import image2 from '../assets/shop4.jpg'
import image3 from '../assets/home.jpg'
import image4 from '../assets/avatar1.webp'
import image5 from '../assets/handbag.jpg'
import image6 from '../assets/cap.jpg'
import image7 from '../assets/headset.jpg'
import image8 from '../assets/watch.jpg'
import image9 from '../assets/shop7.jpg'
import image from '../assets/1blog.jpg'







const CategoryList = () => {
  const categoryData = [
    {
      name: 'Fashion Men , Women & Kid\'s',
      startingPrice: '$80 to $400',
      createdBy: 'Seller',
      id: 'FS16276',
      productStock: 46233,
      image: image1,
    },
    {
      name: 'Women Hand Bag',
      startingPrice: '$120 to $500',
      createdBy: 'Admin',
      id: 'HB73029',
      productStock: 2739,
      image: image5,
    },
    {
      name: 'Cap and Hat',
      startingPrice: '$50 to $200',
      createdBy: 'Admin',
      id: 'CH492-9',
      productStock: 1829,
      image: image6,
    },
    {
      name: 'Electronic Headphones',
      startingPrice: '$100 to $700',
      createdBy: 'seller',
      id: 'CH492-9',
      productStock: 1902,
      image: image7,
    },
    {
      name: 'Shoes',
      startingPrice: '$100 to $700',
      createdBy: 'seller',
      id: 'CH492-9',
      productStock: 1902,
      image: image9,
    },
    {
      name: 'Watches',
      startingPrice: '$100 to $700',
      createdBy: 'seller',
      id: 'CH492-9',
      productStock: 1902,
      image: image8,
    },
    {
      name: 'Computer Gadget',
      startingPrice: '$100 to $700',
      createdBy: 'seller',
      id: 'CH492-9',
      productStock: 1902,
      image: image,
    },
  ];

  const topCategories = [
    { name: 'Fashion Categories', image: image1 },
    { name: 'Electronics Headphone', image: image2 },
    { name: 'Body Lotion', image: image3 },
    { name: 'Eye Ware & Sunglass', image: image4 },
  ];

  return (
    <div className="category-list-containers">

      {/* Top Categories Section */}
      <div className="top-categoriess">
        {topCategories.map((category, index) => (
          <div className="category-cards" key={index}>
            <div className="category-image-containers">
              <img src={category.image} alt={category.name} />
            </div>
            <p className="category-names">{category.name}</p>
          </div>
        ))}
      </div>


      {/* All Categories Section */}
      <div className="all-categories-sections">
        <div className="headers">
          <h2>All Categories List</h2>
          <div className="header-actionss">
            <button className="add-product-buttons">Add Product</button>
            <select className="month-selects">
              <option>This Month</option>
            </select>
          </div>
        </div>

        <table className="category-tables">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Categories</th>
              <th>Starting Price</th>
              <th>Create by</th>
              <th>ID</th>
              <th>Product Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((category, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div className="category-infos">
                    <img src={category.image} alt={category.name} />
                    <span>{category.name}</span>
                  </div>
                </td>
                <td>{category.startingPrice}</td>
                <td>{category.createdBy}</td>
                <td>{category.id}</td>
                <td>{category.productStock}</td>
                <td className="actionss">
                  <button className="action-button views">
                    <i className="fa fa-eyes"></i>
                  </button>
                  <button className="action-button edits">
                    <i className="fa fa-pencils"></i>
                  </button>
                  <button className="action-button deletes">
                    <i className="fa fa-trashs"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;