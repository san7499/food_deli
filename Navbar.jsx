import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount } = useContext(StoreContext); // Ensure correct function

    return (
        <div className="navbar">
            <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
            
            <ul className="navbar-menu">
                <Link to="/" key="home" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href="#explore-menu" key="menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href="#app-download" key="mobile-app" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
                <a href="#footer" key="contact-us" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" className="navbar-icon" />
                <div className="navbar-search-icon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="Cart" />
                    </Link>
                    {getTotalCartAmount() > 0 && <div className="dot"></div>} 
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
};

export default Navbar;
