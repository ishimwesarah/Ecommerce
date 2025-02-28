import React from 'react';
import './dashboard-styles/vendors.css';

const Vendors = () => {
    const vendorsList = [
        "Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4", "Vendor 5", 
        "Vendor 6", "Vendor 7", "Vendor 8", "Vendor 9", "Vendor 10"
    ];

    return (
        <div className="vendors-container">
            <h2>All Vendors</h2>
            <div className="vendors-list">
                {vendorsList.map((vendor, index) => (
                    <div key={index} className="vendor-item">
                        {vendor}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vendors;
