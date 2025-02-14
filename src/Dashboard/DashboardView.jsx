import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { FaShoppingCart, FaAward, FaBriefcase, FaDollarSign } from 'react-icons/fa';
import '../Dashboard/dashboard-styles/dashvie.css';
import image1 from '../assets/blog1.jpg'
import image2 from '../assets/body.jpg'
import image3 from '../assets/shop5.jpg'
import image4 from '../assets/mobile.jpg'
import image5 from '../assets/headset.jpg'


const DashboardCard = ({ icon, title, value, percentage, period, viewMore }) => {
  return (
    <div className="dashboard-card">
      <div className="icon">{icon}</div>
      <div className="details">
        <h3>{title}</h3>
        <p className="value">{value}</p>
        <p className="percentage">
          {percentage > 0 ? '+' : ''}
          {percentage}% ({period})
        </p>
      </div>
      {viewMore && <p className='byaw'>View More</p>}
    </div>
  );
};
const orders = [
  {
    orderId: '#RB5625',
    date: '29 April 2024',
    product: 'Laptop',
    customerName: 'Anna M. Hines',
    emailId: 'anna.hines@mail.com',
    phoneNo: '(+1)-555-1564-261',
    address: 'Burr Ridge/Illinois',
    paymentType: 'Credit Card',
    status: 'Completed',
    productImage: image1
  },
  {
    orderId: '#RB9652',
    date: '25 April 2024',
    product: 'Camera',
    customerName: 'Judith H. Fritsche',
    emailId: 'judith.fritsche.com',
    phoneNo: '(+57)-305-5579-759',
    address: 'SULLIVAN/Kentucky',
    paymentType: 'Credit Card',
    status: 'Completed',
    productImage: image2
  },
  {
    orderId: '#RB5984',
    date: '25 April 2024',
    product: 'Smartwatch',
    customerName: 'Peter T. Smith',
    emailId: 'peter.smith@mail.com',
    phoneNo: '(+33)-655-5187-93',
    address: 'Yreka/California',
    paymentType: 'Pay Pal',
    status: 'Completed',
    productImage: image3
  },
  {
    orderId: '#RB3625',
    date: '21 April 2024',
    product: 'Mobile',
    customerName: 'Emmanuel J. Delcid',
    emailId: 'emmanuel.delicid@mail.com',
    phoneNo: '(+30)-693-5553-637',
    address: 'Atlanta/Georgia',
    paymentType: 'Pay Pal',
    status: 'Processing',
    productImage: image4
  },
  {
    orderId: '#RB8652',
    date: '18 April 2024',
    product: 'Headphone',
    customerName: 'William J. Cook',
    emailId: 'william.cook@mail.com',
    phoneNo: '(+91)-855-5446-150',
    address: 'Rosenberg/Texas',
    paymentType: 'Credit Card',
    status: 'Processing',
    productImage: image5
  },
];
const DashboardView = () => {
  const [data] = useState([
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (data, index) => {
    setActiveIndex(index);
  };

  const activeItem = data[activeIndex];
  const hello = [
    {
      id: 1,
      icon: <FaShoppingCart size={30} color="#4299e1" />,
      title: 'Total Orders',
      value: '13,647',
      percentage: 2.3,
      period: 'Last Week',
      viewMore: true,
    },
    {
      id: 2,
      icon: <FaAward size={30} color="#4299e1" />,
      title: 'New Leads',
      value: '9,526',
      percentage: 8.1,
      period: 'Last Month',
      viewMore: true,
    },
    {
      id: 3,
      icon: <FaBriefcase size={30} color="#4299e1" />,
      title: 'Deals',
      value: '976',
      percentage: -0.3,
      period: 'Last Month',
      viewMore: true,
    },
    {
      id: 4,
      icon: <FaDollarSign size={30} color="#4299e1" />,
      title: 'Booked Revenue',
      value: '$123.6k',
      percentage: -10.6,
      period: 'Last Month',
      viewMore: true,
    },
  ];
  const pageData = [
    { path: 'http://localhost:5173/shop', views: 465, exit: 4.4 },
    { path: 'http://localhost:5173/Vendor', views: 426, exit: 20.4 },
    { path: 'http://localhost:5173/Blog', views: 254, exit: 12.2 },
    { path: 'larkon/auth-login.html', views: 3369, exit: 5.2 },
    { path: 'larkon/email.html', views: 985, exit: 64.2 },
    { path: 'larkon/social.html', views: 653, exit: 2.4 },
    { path: 'larkon/blog.html', views: 478, exit: 1.4 },
  ];

    const countryData = [
    { country: 'Canada', sessions: 23.5, lastWeekSessions: 41.05 },
    { country: 'United States', sessions: 23.5, lastWeekSessions: 41.05 },
    { country: 'Russia', sessions: 23.5, lastWeekSessions: 41.05 },
    { country: 'China', sessions: 23.5, lastWeekSessions: 41.05 },
    { country: 'Brazil', sessions: 23.5, lastWeekSessions: 41.05 },
  ];

  return (
    <div className="dashboard-view-container">
      <div className="dashboard-main">
        <div className="this">
          {hello.map((item) => (
            <DashboardCard key={item.id} {...item} className="itemss" />
          ))}
        </div>
        <div className="dashboard-content">
          <p className="click-text">Click each rectangle</p>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={data}>
              <Bar dataKey="uv" onClick={handleClick}>
                {data.map((entry, index) => (
                  <Cell
                    cursor="pointer"
                    fill={index === activeIndex ? '#82ca9d' : '#8884d8'}
                    key={`cell-${index}`}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
        </div>

        
      </div>
      <div className="lower-container">
      {/* Conversions */}
      <div className="lower-card">
        <div className="card-header">Conversions</div>
        <div className="card-body conversions">
          <div className="donut-chart">
            <div className="donut-segment"></div>
            <div className="donut-hole">65.2%</div>
          </div>
          <p className="returning-customer">Returning Customer</p>
          <div className="conversion-stats">
            <div className="this-week">
              <p>This Week</p>
              <p>23.5k</p>
            </div>
            <div className="last-week">
              <p>Last Week</p>
              <p>41.05k</p>
            </div>
          </div>
          <button className="view-details-button">View Details</button>
        </div>
      </div>

      {/* Sessions by Country */}
      <div className="lower-card">
        <div className="card-header">Sessions by Country</div>
        <div className="card-body sessions">
          <img
            src="https://www.mapsofworld.com/style_2019/images/world-map.png?v:1"
            alt="World Map"
            className="map-image"
          />
          <div className="session-stats">
            <div className="this-week">
              <p>This Week</p>
              <p>{countryData[0].sessions}k</p>
            </div>
            <div className="last-week">
              <p>Last Week</p>
              <p>{countryData[0].lastWeekSessions}k</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="lower-card">
        <div className="card-header top-pages-header">
          Top Pages
          <button className="view-all-button">View All</button>
        </div>
        <div className="card-body top-pages">
          <table className="top-pages-table">
            <thead>
              <tr>
                <th>Page Path</th>
                <th>Page Views</th>
                <th>Exit</th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((page, index) => (
                <tr key={index}>
                  <td>{page.path}</td>
                  <td>{page.views}</td>
                  <td className="exit-rate">{page.exit}%</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-scroll-bar">
            <div className="scroll-thumb"></div>
          </div>
        </div>
        
      </div>

    </div>
    <div className="order-table-container">
      <div className="header">
        <h2>Recent Orders</h2>
        <button className="create-order-button">+ Create Order</button>
      </div>

      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID.</th>
            <th>Date</th>
            <th>Product</th>
            <th>Customer Name</th>
            <th>Email ID</th>
            <th>Phone No.</th>
            <th>Address</th>
            <th>Payment Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.date}</td>
              <td><img src={order.productImage} alt={order.product} /></td>
              <td>{order.customerName}</td>
              <td>{order.emailId}</td>
              <td>{order.phoneNo}</td>
              <td>{order.address}</td>
              <td>{order.paymentType}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}></span>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <p>Showing 5 of 19 orders</p>
        <div className="pagination-buttons">
          <button>←</button>
          <button className="active">1</button>
          <button>2</button>
          <button>→</button>
        </div>
      </div>

      <div className="footer">
        <p>2025 © Larkon. Crafted by ❤️ Techzaa</p>
      </div>
    </div>
    </div>
  );
};

export default DashboardView;
