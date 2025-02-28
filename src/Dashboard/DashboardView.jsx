import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import './dashboard-styles/dashvie.css';

const salesData = [
    { month: 'Jan', revenue: 12000 },
    { month: 'Feb', revenue: 15500 },
    { month: 'Mar', revenue: 18000 },
    { month: 'Apr', revenue: 20000 },
    { month: 'May', revenue: 23000 },
    { month: 'Jun', revenue: 25000 }
];

const revenueBreakdown = [
    { name: 'Online Sales', value: 40000 },
    { name: 'In-Store Sales', value: 15000 },
    { name: 'Wholesale', value: 10000 }
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const products = [
    { name: 'iPhone 15', price: '$799', stock: 25 },
    { name: 'MacBook Pro', price: '$1,299', stock: 10 },
    { name: 'AirPods Pro', price: '$249', stock: 40 }
];

const categories = ['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports'];

const orders = [
    { id: '#1012', customer: 'John Doe', amount: '$120.50', status: 'Completed' },
    { id: '#1013', customer: 'Sarah Smith', amount: '$90.00', status: 'Pending' },
    { id: '#1014', customer: 'Michael Johnson', amount: '$145.20', status: 'Shipped' }
];

const vendors = [
    { name: 'Apple', totalSales: '$50,000' },
    { name: 'Samsung', totalSales: '$35,000' },
    { name: 'Nike', totalSales: '$20,000' }
];

const blogs = [
    { title: 'Top 10 Tech Trends in 2025', author: 'Admin', date: 'Feb 25, 2025' },
    { title: 'How to Improve Your Online Store', author: 'Jane Doe', date: 'Feb 20, 2025' },
    { title: 'Best E-commerce Strategies for Growth', author: 'John Smith', date: 'Feb 15, 2025' }
];

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Sales Overview Section */}
            <div className="sales-overview">
                <h2 className="section-title">Sales Overview</h2>
                <div className="sales-metrics">
                    <div className="metric-card">
                        <h3>$65,640</h3>
                        <p>Total Revenue</p>
                    </div>
                    <div className="metric-card">
                        <h3>3,250</h3>
                        <p>Total Orders</p>
                    </div>
                    <div className="metric-card">
                        <h3>1,500</h3>
                        <p>New Customers</p>
                    </div>
                </div>
            </div>

            {/* Sales Performance Chart */}
            <div className="sales-performance">
                <h2 className="section-title">Sales Performance</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="revenue" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Products Section */}
            <div className="products">
                <h2 className="section-title">Products</h2>
                <div className="product-list">
                    {products.map((product, index) => (
                        <div key={index} className="product-item">
                            <span>{product.name}</span>
                            <span>{product.price}</span>
                            <span>{product.stock} in stock</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories Section */}
            <div className="categories">
                <h2 className="section-title">Categories</h2>
                <div className="category-list">
                    {categories.map((category, index) => (
                        <span key={index} className="category-item">{category}</span>
                    ))}
                </div>
            </div>

            {/* Orders Section */}
            <div className="recent-orders">
                <h2 className="section-title">Recent Orders</h2>
                <div className="orders-list">
                    {orders.map((order, index) => (
                        <div key={index} className="order-item">
                            <span>{order.id}</span>
                            <span>{order.customer}</span>
                            <span>{order.amount}</span>
                            <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vendors Section */}
            <div className="vendors">
                <h2 className="section-title">Top Vendors</h2>
                <div className="vendor-list">
                    {vendors.map((vendor, index) => (
                        <div key={index} className="vendor-item">
                            <span>{vendor.name}</span>
                            <span>{vendor.totalSales}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blogs Section */}
            <div className="blogs">
                <h2 className="section-title">Recent Blog Posts</h2>
                <div className="blog-list">
                    {blogs.map((blog, index) => (
                        <div key={index} className="blog-item">
                            <span>{blog.title}</span>
                            <span>by {blog.author} - {blog.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
