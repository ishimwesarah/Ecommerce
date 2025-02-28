import React from 'react';
import './dashboard-styles/orders.css';

const orders = [
    { id: '#1012', customer: 'John Doe', amount: '$120.50', status: 'Completed' },
    { id: '#1013', customer: 'Sarah Smith', amount: '$90.00', status: 'Pending' },
    { id: '#1014', customer: 'Michael Johnson', amount: '$145.20', status: 'Shipped' }
];

const Orders = () => {
    return (
        <div className="orders-container">
            <h2>Recent Orders</h2>
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
    );
};

export default Orders;
