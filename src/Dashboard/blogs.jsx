import React from 'react';
import './dashboard-styles/blogs.css';

const blogs = [
    { title: 'Top 10 Tech Trends in 2025', author: 'Admin', date: 'Feb 25, 2025' },
    { title: 'How to Improve Your Online Store', author: 'Jane Doe', date: 'Feb 20, 2025' },
    { title: 'Best E-commerce Strategies for Growth', author: 'John Smith', date: 'Feb 15, 2025' }
];

const DashBlogs = () => {
    return (
        <div className="blogs-container">
            <h2>Recent Blog Posts</h2>
            <div className="blog-list">
                {blogs.map((blog, index) => (
                    <div key={index} className="blog-item">
                        <span>{blog.title}</span>
                        <span>by {blog.author} - {blog.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashBlogs;
