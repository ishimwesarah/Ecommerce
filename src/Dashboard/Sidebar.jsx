import{ useState } from 'react';
import { FaTachometerAlt, FaBoxOpen, FaTags,  FaShoppingCart, FaClipboardList, FaFileInvoice, FaArrowRight } from 'react-icons/fa';
import '../Dashboard/dashboard-styles/Sidebar.css';
import { GrContact } from "react-icons/gr";


const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar-container ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-header">
                <div className="logo-container">
                    <FaBoxOpen className="logo-icon" />
                    {!isCollapsed && <h1>Botiga</h1>}
                </div>
                <FaArrowRight onClick={toggleCollapse} className={`arrow-right-icon ${isCollapsed ? 'rotated' : ''}`} />
            </div>

            <div className="nav-section-title">General</div>

            <div className="nav-item">
                <FaTachometerAlt />
              <a href='/dashboard' style={{ color: 'inherit', textDecoration: 'none' }}>  {!isCollapsed && <span className="nav-item-text">Dashboard</span>}</a>
            </div>

            <div className="nav-item">
                <FaBoxOpen />
              <a href='/product' style={{ color: 'inherit', textDecoration: 'none' }}> {!isCollapsed && <span className="nav-item-text">Products</span>}</a>
                {!isCollapsed && <div className="nav-dropdown"><FaArrowRight /></div>}
            </div>

            <div className="nav-item">
                <FaTags />
              <a href='/category' style={{ color: 'inherit', textDecoration: 'none' }}>  {!isCollapsed && <span className="nav-item-text">Category</span>}</a>
                {!isCollapsed && <div className="nav-dropdown"><FaArrowRight /></div>}
            </div>

            <div className="nav-item">
                <FaShoppingCart />
                <a href='/Orders' style={{ color: 'inherit', textDecoration: 'none' }}>   {!isCollapsed && <span className="nav-item-text">Orders</span>}</a>
                {!isCollapsed && <div className="nav-dropdown"><FaArrowRight /></div>}
            </div>

            <div className="nav-item">
                <FaClipboardList />
                <a href='/Vendors' style={{ color: 'inherit', textDecoration: 'none' }}>   {!isCollapsed && <span className="nav-item-text">Vendors</span>}</a>
                {!isCollapsed && <div className="nav-dropdown"><FaArrowRight /></div>}
            </div>

            <div className="nav-item">
                <GrContact />
                <a href='/Blogs' style={{ color: 'inherit', textDecoration: 'none' }}>   {!isCollapsed && <span className="nav-item-text">Blogs</span>}</a>
                {!isCollapsed && <div className="nav-dropdown"><FaArrowRight /></div>}
            </div>

            <div className="nav-item">
                <FaFileInvoice />
                <a href='/Contacts' style={{ color: 'inherit', textDecoration: 'none' }}>   {!isCollapsed && <span className="nav-item-text">Contacts</span>}</a>
                {!isCollapsed && <div className="nav-dropdown"><FaArrowRight /></div>}
            </div>

        </div>
    );
};

export default Sidebar;
