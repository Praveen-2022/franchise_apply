import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buySellDropdownOpen, setBuySellDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  const handleLinkClick = () => {
    setMenuOpen(false);
    setBuySellDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="left-section">
          <div>
            <h5 className="logo">Franchise Apply</h5>
          </div>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <div className="main-links">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setBuySellDropdownOpen(true)}
              onMouseLeave={() => setBuySellDropdownOpen(false)}
            >
              <Link to="/">Buy / Sell Business</Link>
              <ul
                className={
                  buySellDropdownOpen ? "dropdown-menu show" : "dropdown-menu"
                }
              >
                <li>
                  <Link to="/buy-business" onClick={handleLinkClick}>
                    Buy Existing Business
                  </Link>
                </li>
                <li>
                  <Link to="/sell-business" onClick={handleLinkClick}>
                    Sell Existing Business
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/register_brand" onClick={handleLinkClick}>
                Register Your Brand
              </Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link to="/">Our Services</Link>
              <ul
                className={
                  servicesDropdownOpen ? "dropdown-menu show" : "dropdown-menu"
                }
              >
                <li>
                  <Link to="/service1" onClick={handleLinkClick}>
                    Brand Franchise Business Model
                  </Link>
                </li>
                <li>
                  <Link to="/service2" onClick={handleLinkClick}>
                    Franchise Consultancy
                  </Link>
                </li>
                <li>
                  <Link to="/service3" onClick={handleLinkClick}>
                    Marketing & Lead Generation for Brands
                  </Link>
                </li>
                <li>
                  <Link to="/service4" onClick={handleLinkClick}>
                    Commercial Property Registration
                  </Link>
                </li>
                <li>
                  <Link to="/service5" onClick={handleLinkClick}>
                    Franchise Development Program
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog" onClick={handleLinkClick}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/interviews" onClick={handleLinkClick}>
                Interviews
              </Link>
            </li>
            <li>
              <Link to="/videos" onClick={handleLinkClick}>
                Videos
              </Link>
            </li>
            <li>
              <Link to="/master-franchise" onClick={handleLinkClick}>
                Master Franchise
              </Link>
            </li>
            <li>
              <Link
                to="/buy-magazine"
                className="animated-button"
                onClick={handleLinkClick}
              >
                Buy Magazine
              </Link>
            </li>
            <li>
              <Link
                to="/fbo-india"
                className="animated-button"
                onClick={handleLinkClick}
              >
                FBO India
              </Link>
            </li>
          </div>

          <div className="auth-links">
            <Link to="/login" onClick={handleLinkClick}>
              Login
            </Link>
            <Link to="/register" className="register" onClick={handleLinkClick}>
              Register
            </Link>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
