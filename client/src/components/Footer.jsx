import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "../styles/footer.css";
import { Link } from "react-router-dom";

import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="footer-section pt-4 pb-2 mt-4">
        <div className="container">
          <div className="row">
            {/* Browse by Location */}
            <div className="col-12 col-md-7 mb-4">
              <h5 className="newsletter-heading">BROWSE BY LOCATION</h5>
              <div className="states-container">
                <Link to="/state/andhra-pradesh" className="state-link">
                  Andhra Pradesh
                </Link>{" "}
                |
                <Link to="/state/arunachal-pradesh" className="state-link">
                  Arunachal Pradesh
                </Link>{" "}
                |
                <Link to="/state/assam" className="state-link">
                  Assam |
                </Link>
                <Link to="/state/bihar" className="state-link">
                  Bihar |
                </Link>
                <Link to="/state/chandigarh" className="state-link">
                  Chandigarh |
                </Link>
                <Link to="/state/chhattisgarh" className="state-link">
                  Chhattisgarh |
                </Link>
                <Link to="/state/daman-diu" className="state-link">
                  Daman Diu |
                </Link>
                <Link to="/state/goa" className="state-link">
                  Goa |
                </Link>
                <Link to="/state/gujarat" className="state-link">
                  Gujarat |
                </Link>
                <Link to="/state/haryana" className="state-link">
                  Haryana |
                </Link>
                <Link to="/state/himachal-pradesh" className="state-link">
                  Himachal Pradesh |
                </Link>
                <Link to="/state/jammu-kashmir" className="state-link">
                  Jammu Kashmir |
                </Link>
                <Link to="/state/jharkhand" className="state-link">
                  Jharkhand |
                </Link>
                <Link to="/state/karnataka" className="state-link">
                  Karnataka |
                </Link>
                <Link to="/state/kerala" className="state-link">
                  Kerala |
                </Link>
                <Link to="/state/lakshadweep" className="state-link">
                  Lakshadweep |
                </Link>
                <Link to="/state/madhya-pradesh" className="state-link">
                  Madhya Pradesh |
                </Link>
                <Link to="/state/maharashtra" className="state-link">
                  Maharashtra |
                </Link>
                <Link to="/state/manipur" className="state-link">
                  Manipur |
                </Link>
                <Link to="/state/meghalaya" className="state-link">
                  Meghalaya |
                </Link>
                <Link to="/state/mizoram" className="state-link">
                  Mizoram |
                </Link>
                <Link to="/state/nagaland" className="state-link">
                  Nagaland |
                </Link>
                <Link to="/state/new-delhi" className="state-link">
                  New Delhi |
                </Link>
                <Link to="/state/orissa" className="state-link">
                  Orissa |
                </Link>
                <Link to="/state/pondicherry" className="state-link">
                  Pondicherry |
                </Link>
                <Link to="/state/punjab" className="state-link">
                  Punjab |
                </Link>
                <Link to="/state/rajasthan" className="state-link">
                  Rajasthan |
                </Link>
                <Link to="/state/sikkim" className="state-link">
                  Sikkim |
                </Link>
                <Link to="/state/tamil-nadu" className="state-link">
                  Tamil Nadu |
                </Link>
                <Link to="/state/tripura" className="state-link">
                  Tripura |
                </Link>
                <Link to="/state/uttaranchal" className="state-link">
                  Uttaranchal |
                </Link>
                <Link to="/state/uttar-pradesh" className="state-link">
                  Uttar Pradesh |
                </Link>
                <Link to="/state/west-bengal" className="state-link">
                  West Bengal
                </Link>
              </div>
            </div>
            <div className="mb-4 col-md-5 col-12">
              <h5 className="newsletter-heading">
                SUBSCRIBE TO OUR NEWSLETTER!
              </h5>
              <p className="newsletter-p">
                Never Miss Anything From Construx By Signing Up To
                <br /> Our Newsletter.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="input-field"
                />
                <button className="email-btn">
                  <SiMinutemailer className="icon" />
                </button>
              </div>
            </div>
          </div>

          <div className="align-items-start row">
            {/* Franchise Image */}
            <div className="text-center col-12 col-md-6 col-lg-3 mb-4">
              <img
                src="https://franchiseapply.com/admin/uploads/slider/fmagazine/793927.jpg"
                alt="Franchise Magazine"
                className="franchise-img"
              />
              <div className="d-flex justify-content-center align-items-center">
                <button className="mt-3 subscribe-btn">Subscribe Now</button>
              </div>
            </div>

            {/* Services */}
            <div className="mb-4 col-12 col-md-6 col-lg-3">
              <h5 className="newsletter-heading">Our Services</h5>
              <ul className="list-unstyled fw-semibold">
                <li>Brand Franchise Business Model</li>
                <li>Franchise Consultancy</li>
                <li>Marketing & Lead Generation</li>
                <li>Commercial Property Registration</li>
                <li>Franchise Development Programme</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="mb-4 col-12 col-md-6 col-lg-3">
              <h5 className="newsletter-heading">Quick Links</h5>
              <ul className="list-unstyled fw-semibold">
                <li>Home</li>
                <li>Buy Premium Franchise</li>
                <li>Buy Existing Business</li>
                <li>Sell Existing Business</li>
                <li>View Registered Properties</li>
                <li>Register Your Property</li>
                <li>Become Our Channel Partner</li>
                <li>Contact-us</li>
                <li>About</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            {/* Popular Franchise */}
            <div className="mb-4 col-12 col-md-6 col-lg-3">
              <h5 className="fw-bold newsletter-heading">Popular Franchise</h5>
              <ul className="list-unstyled fw-semibold">
                <li>Automobiles</li>
                <li>Beauty and Salon</li>
                <li>Business Services</li>
                <li>Dealers and Distributors</li>
                <li>Education</li>
                <li>Health and Wellness</li>
                <li>Food and Beverage</li>
                <li>Retail</li>
                <li>Courier Logistics</li>
                <li>Power and Energy</li>
                <li>Electronics</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="mt-3 row">
              <div className="co-12 col-md-3">
                <h6>Social Media</h6>
                <div className="social-icons">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                  <FaYoutube />
                  <FaInstagram />
                  <FaWhatsapp />
                </div>
              </div>
              {/* Links Section */}
              <div className="col-12 col-md-3 footer-link">
                <Link to="/">Home</Link>
                <Link to="/interviews">Interviews</Link>
                <Link to="/policy">Privacy Policy</Link>
              </div>
              <div className="col-12 col-md-3 footer-link">
                <Link to="/">About Us</Link>
                <Link to="/videos">Videos</Link>
              </div>
              <div className="col-12 col-md-3 footer-link">
                <Link to="/contact">Contact Us</Link>
                <Link to="/">Master Franchise</Link>
                <Link to="/blog">Blogs</Link>
                <Link to="/">Terms & condition</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 text-center mt-3 ">
          {/* Copyright Section */}
          <div className="col-12">
            <p className="copyright">Copyright © 2025 - 2026 Brain Wonder's</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
