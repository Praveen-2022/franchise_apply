import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Carousel, Collapse } from "react-bootstrap";
import { FaCar } from "react-icons/fa";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FcReading } from "react-icons/fc";
import { BsHeartPulse } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaBuildingWheat } from "react-icons/fa6";
import { GiAtomicSlashes } from "react-icons/gi";
import { MdPhonelink } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";

import "../styles/Home.css";
import MagazineCarousel from "../components/MagazineCarousel";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import EventCarousel from "../components/EventCarousel";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-4 franchise-section">
            <p className="text-center">Top Franchise Opportunity</p>
            <p className="text-center fw-bold" style={{ color: "#1abc9c" }}>
              OPPORTUNITIES
            </p>
            <Link className="dc-btn">Explore All</Link>
          </div>
          <div className="col-12 col-md-4 franchise-section">
            <p className="text-center">Top Premium Franchise</p>
            <p className="text-center fw-bold" style={{ color: "#3fabf3" }}>
              OPPORTUNITIES
            </p>
            <Link className="dc-btn" style={{ borderColor: "#3fabf3" }}>
              Explore All
            </Link>
          </div>
          <div className="col-12 col-md-4 franchise-section">
            <p className="text-center">Master Franchise</p>
            <p className="text-center fw-bold" style={{ color: "#9b59b6" }}>
              OPPORTUNITIES
            </p>
            <Link
              to="/master-franchise"
              className="dc-btn"
              style={{ borderColor: "#9b59b6" }}
            >
              Explore All
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <aside className="col-12 col-md-3 p-0 shadow-sm aside-bar">
            <ul>
              <li>
                <Link to="/automobiles">
                  <FaCar /> Automobiles
                </Link>
              </li>
              <li>
                <Link to="/beauty-and-salon">
                  <MdFaceRetouchingNatural /> Beauty and Salon
                </Link>
              </li>
              <li>
                <Link to="/business-servicess">
                  <FaTools /> Business Services
                </Link>
              </li>
              <li>
                <Link to="/dealers-and-distributers">
                  <FaTruck /> Dealers and Distributors
                </Link>
              </li>
              <li>
                <Link to="/education">
                  <FcReading /> Education
                </Link>
              </li>
              <li>
                <Link to="/health-and-wellness">
                  <BsHeartPulse /> Health and Wellness
                </Link>
              </li>
              <li>
                <Link to="/food-and-beverage">
                  <ImSpoonKnife /> Food and Beverage
                </Link>
              </li>
              <li>
                <Link to="/retail">
                  <SiHomeassistantcommunitystore /> Retail
                </Link>
              </li>
              <li>
                <Link to="/courier-logistics">
                  <FaBuildingWheat /> Courier Logistics
                </Link>
              </li>
              <li>
                <Link to="/power-and-energy">
                  <GiAtomicSlashes /> Power and Energy
                </Link>
              </li>
              <li>
                <Link to="/electronics">
                  <MdPhonelink /> Electronics
                </Link>
              </li>
            </ul>
          </aside>

          <div className="col-12 col-md-9">
            <div className="carousel-container">
              <Carousel
                interval={3000}
                controls={true}
                indicators={false}
                pause={false}
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://franchiseapply.com/admin/uploads/brand_registration/1620017431_3.png"
                    alt="Slide 1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://franchiseapply.com/admin/uploads/brand_registration/1639628365_3.jpg"
                    alt="Slide 2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://franchiseapply.com/admin/uploads/brand_registration/1639213702_3.jpg"
                    alt="Slide 3"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <EventCarousel/>
        {/* Events Franchise */}</div>

      <div className="container border rounded shadow-sm my-4">
        {/* Top Franchise */}
        <div className="d-flex align-items-center my-3">
          <div className="franchise-box text-uppercase">
            TOP FRANCHISE OPPORTUNITIES
          </div>
          <div className="franchise-lines w-100">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        <div className="my-3">
          <div className="row gx-3">
            <div className="col-12 col-md-3">
              <div className="border m-1 shadow-sm rounded">
                <div className="d-flex align-items-center justify-content-center border m-1 rounded p-2 bg-light">
                  {/* Image div */}
                  <img
                    src="https://franchiseapply.com/admin/uploads/brand_registration/1642240798_2.jpg"
                    alt="automobile"
                    className="img-fluid"
                  />
                </div>
                <div className="p-2">
                  {/* text div */}
                  <p style={{ fontSize: "12px" }}>Automobiles</p>
                  <p className="line-clamp-1 fw-semibold">
                    Quick Auto Service - Two Wheeler Multi Brand Service Centre
                  </p>
                  <div className="d-flex justify-content-between py-1 align-items-center">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Investment
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      4 Lacs - 6 lacs
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Space req
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      400 - 600 sq ft
                    </p>
                  </div>
                  <button
                    // href={card.link}
                    className="btn btn-outline-primary w-100 mt-2"
                    // onClick={() => handleExplore(card)}
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="border m-1 shadow-sm rounded">
                <div className="d-flex align-items-center justify-content-center border m-1 rounded p-2 bg-light">
                  {/* Image div */}
                  <img
                    src="https://franchiseapply.com/admin/uploads/brand_registration/1642240798_2.jpg"
                    alt="automobile"
                    className="img-fluid"
                  />
                </div>
                <div className="p-2">
                  {/* text div */}
                  <p style={{ fontSize: "12px" }}>Automobiles</p>
                  <p className="line-clamp-1 fw-semibold">
                    Quick Auto Service - Two Wheeler Multi Brand Service Centre
                  </p>
                  <div className="d-flex justify-content-between py-1 align-items-center">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Investment
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      4 Lacs - 6 lacs
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Space req
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      400 - 600 sq ft
                    </p>
                  </div>
                  <button
                    // href={card.link}
                    className="btn btn-outline-primary w-100 mt-2"
                    // onClick={() => handleExplore(card)}
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="border m-1 shadow-sm rounded">
                <div className="d-flex align-items-center justify-content-center border m-1 rounded p-2 bg-light">
                  {/* Image div */}
                  <img
                    src="https://franchiseapply.com/admin/uploads/brand_registration/1642240798_2.jpg"
                    alt="automobile"
                    className="img-fluid"
                  />
                </div>
                <div className="p-2">
                  {/* text div */}
                  <p style={{ fontSize: "12px" }}>Automobiles</p>
                  <p className="line-clamp-1 fw-semibold">
                    Quick Auto Service - Two Wheeler Multi Brand Service Centre
                  </p>
                  <div className="d-flex justify-content-between py-1 align-items-center">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Investment
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      4 Lacs - 6 lacs
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Space req
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      400 - 600 sq ft
                    </p>
                  </div>
                  <button
                    // href={card.link}
                    className="btn btn-outline-primary w-100 mt-2"
                    // onClick={() => handleExplore(card)}
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="border m-1 shadow-sm rounded">
                <div className="d-flex align-items-center justify-content-center border m-1 rounded p-2 bg-light">
                  {/* Image div */}
                  <img
                    src="https://franchiseapply.com/admin/uploads/brand_registration/1642240798_2.jpg"
                    alt="automobile"
                    className="img-fluid"
                  />
                </div>
                <div className="p-2">
                  {/* text div */}
                  <p style={{ fontSize: "12px" }}>Automobiles</p>
                  <p className="line-clamp-1 fw-semibold">
                    Quick Auto Service - Two Wheeler Multi Brand Service Centre
                  </p>
                  <div className="d-flex justify-content-between py-1 align-items-center">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Investment
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      4 Lacs - 6 lacs
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Space req
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      400 - 600 sq ft
                    </p>
                  </div>
                  <button
                    // href={card.link}
                    className="btn btn-outline-primary w-100 mt-2"
                    // onClick={() => handleExplore(card)}
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container border rounded shadow-sm my-4">
        {/* Top Franchise */}
        <div className="d-flex align-items-center my-3">
          <div className="franchise-box text-uppercase">
            Top Premium Franchise Opportunities
          </div>
          <div className="franchise-lines w-100">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        <div className="my-3">
          <div className="row gx-3">
            <div className="col-12 col-md-3">
              <div className="border m-1 shadow-sm rounded">
                <div className="d-flex align-items-center justify-content-center border m-1 rounded p-2 bg-light">
                  {/* Image div */}
                  <img
                    src="https://franchiseapply.com/admin/uploads/brand_registration/1642240798_2.jpg"
                    alt="automobile"
                    className="img-fluid"
                  />
                </div>
                <div className="p-2">
                  {/* text div */}
                  <p style={{ fontSize: "12px" }}>Automobiles</p>
                  <p className="line-clamp-1 fw-semibold">
                    Quick Auto Service - Two Wheeler Multi Brand Service Centre
                  </p>
                  <div className="d-flex justify-content-between py-1 align-items-center">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Investment
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      4 Lacs - 6 lacs
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Space req
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      400 - 600 sq ft
                    </p>
                  </div>
                  <button
                    // href={card.link}
                    className="btn btn-outline-primary w-100 mt-2"
                    // onClick={() => handleExplore(card)}
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="border m-1 shadow-sm rounded">
                <div className="d-flex align-items-center justify-content-center border m-1 rounded p-2 bg-light">
                  {/* Image div */}
                  <img
                    src="https://franchiseapply.com/admin/uploads/brand_registration/1642240798_2.jpg"
                    alt="automobile"
                    className="img-fluid"
                  />
                </div>
                <div className="p-2">
                  {/* text div */}
                  <p style={{ fontSize: "12px" }}>Automobiles</p>
                  <p className="line-clamp-1 fw-semibold">
                    Quick Auto Service - Two Wheeler Multi Brand Service Centre
                  </p>
                  <div className="d-flex justify-content-between py-1 align-items-center">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Investment
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      4 Lacs - 6 lacs
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Space req
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      400 - 600 sq ft
                    </p>
                  </div>
                  <button
                    // href={card.link}
                    className="btn btn-outline-primary w-100 mt-2"
                    // onClick={() => handleExplore(card)}
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="border m-1 shadow-sm rounded">
                <div className="d-flex align-items-center justify-content-center border m-1 rounded p-2 bg-light">
                  {/* Image div */}
                  <img
                    src="https://franchiseapply.com/admin/uploads/brand_registration/1642240798_2.jpg"
                    alt="automobile"
                    className="img-fluid"
                  />
                </div>
                <div className="p-2">
                  {/* text div */}
                  <p style={{ fontSize: "12px" }}>Automobiles</p>
                  <p className="line-clamp-1 fw-semibold">
                    Quick Auto Service - Two Wheeler Multi Brand Service Centre
                  </p>
                  <div className="d-flex justify-content-between py-1 align-items-center">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Investment
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      4 Lacs - 6 lacs
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Space req
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      400 - 600 sq ft
                    </p>
                  </div>
                  <button
                    // href={card.link}
                    className="btn btn-outline-primary w-100 mt-2"
                    // onClick={() => handleExplore(card)}
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="border m-1 shadow-sm rounded">
                <div className="d-flex align-items-center justify-content-center border m-1 rounded p-2 bg-light">
                  {/* Image div */}
                  <img
                    src="https://franchiseapply.com/admin/uploads/brand_registration/1642240798_2.jpg"
                    alt="automobile"
                    className="img-fluid"
                  />
                </div>
                <div className="p-2">
                  {/* text div */}
                  <p style={{ fontSize: "12px" }}>Automobiles</p>
                  <p className="line-clamp-1 fw-semibold">
                    Quick Auto Service - Two Wheeler Multi Brand Service Centre
                  </p>
                  <div className="d-flex justify-content-between py-1 align-items-center">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Investment
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      4 Lacs - 6 lacs
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-1">
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      Space req
                    </p>
                    <p
                      className="mb-0 fw-bold"
                      style={{ fontSize: "14px", color: "#6f6f6f" }}
                    >
                      400 - 600 sq ft
                    </p>
                  </div>
                  <button
                    // href={card.link}
                    className="btn btn-outline-primary w-100 mt-2"
                    // onClick={() => handleExplore(card)}
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mt-4">
        <div className="d-flex justify-content-between py-1 blog-div align-items-center">
          <h5>BLOG AND NEWS</h5>
          <Link to="/blog" className="link-btn">
            VIEW ALL
          </Link>
        </div>

        <div className="row my-4">
          <div className="col-12 col-lg-4">
            <Link to="/blog" className="blog-link">
              <div className="blog-card">
                <div className="image-container">
                  <img
                    src="https://franchiseapply.com/admin/uploads/blog/408941.jpg"
                    alt="Education Franchise"
                    className="card-image"
                  />
                  <div className="overlay">
                    <div className="text-content">
                      <p className="title">
                        SEVEN-STEP GUIDE TO LAUNCH AN EDUCATIONAL FRANCHISE
                        BUSINESS IN INDIA
                      </p>
                      <p className="date">09-Sep-2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="blog-card">
              <div className="image-container">
                <img
                  src="https://franchiseapply.com/admin/uploads/blog/408941.jpg"
                  alt="Education Franchise"
                  className="card-image"
                />
                <div className="overlay">
                  <div className="text-content">
                    <p className="title">
                      SEVEN-STEP GUIDE TO LAUNCH AN EDUCATIONAL FRANCHISE
                      BUSINESS IN INDIA
                    </p>
                    <p className="date">09-Sep-2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="image-container">
                <img
                  src="https://franchiseapply.com/admin/uploads/blog/408941.jpg"
                  alt="Education Franchise"
                  className="card-image"
                />
                <div className="overlay">
                  <div className="text-content">
                    <p className="title">
                      SEVEN-STEP GUIDE TO LAUNCH AN EDUCATIONAL FRANCHISE
                      BUSINESS IN INDIA
                    </p>
                    <p className="date">09-Sep-2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="detail-blog-card">
              {/* Blog Image */}
              <div className="image-container">
                <img
                  src="https://franchiseapply.com/admin/uploads/blog/408941.jpg"
                  alt="Education Franchise"
                  className="card-img-top"
                />
              </div>

              {/* Blog Content */}
              <div className="bottom-card-body">
                {/* Author & Date */}
                <div className="d-flex align-items-center text-muted small mb-2">
                  <span className="me-2">👤 Admin</span>
                  <span>26-Oct-2024</span>
                </div>

                {/* Blog Title */}
                <h5 className="blog-title">
                  India's Fastest Growing Pre-School - ICON Nurturing Innocence
                  Preschool
                </h5>

                {/* Subtitle */}
                <p className="blog-subtitle">
                  Cultivating Bright Futures: The Inspirational Journey of Icon
                  Nurturing Innocence - A Preschool Chain.
                </p>

                {/* Description */}
                <p className="blog-mini">
                  Despite the cut-throat competition in early childhood
                  education, Icon Nurturing Innocence Preschool is shining high
                  as a welfare Nurturing Innocence Preschool is shining high as
                  a welfare reformer...
                </p>

                {/* Read More */}
                <Link to="/blog" className="read-more">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">{/* New Arrivals Brand */}</div>

      <div className="container">
        {/* testimonials */}
        <Testimonials />
      </div>

      <div className="container">
        <Gallery />
        {/* Gallery */}
      </div>

      <div className="container">
        {/* Franchise Magazine */}
        <MagazineCarousel />
      </div>

      <div className="container my-4">
        {/* text-section */}
        <h3>Top Business Franchise Opportunities In India: Franchise Apply</h3>
        <h5 className="fw-bold">Smart Opportunities Inviting You to Grow</h5>
        <p>
          Franchise Apply is your one-stop source where you can grab amazing
          franchise opportunities in India. We are here to help you start your
          own profitable franchise business in India and use test-and-tried ways
          to earn big. We welcome investors to seek the better opportunities to
          start their own venture. Our website shows every minute detail and
          covers all aspects of franchise business opportunities. Being one of
          the trusted platforms, we strive to serve the purposes of investors,
          who are looking for a top franchise in India. We focus on a wide
          spectrum of sectors where you can easily find the reliable options for
          the franchise in India with low investment.
        </p>
        {/* Collapse Section */}
        <Collapse in={open}>
          <div id="collapse-content" className="mt-3">
            <div>
              <p>
                We have come up as one such destination where investors,
                startups, distributors, dealers, franchise prospect seekers can
                seek opportunities to start the best franchise business in
                India. Our main objective is to present a dependable platform
                where franchisors and entrepreneurs can get connected and invest
                in a profitable franchise in India. We have been delivering the
                choices for ones, looking for information on low cost franchise
                industries. To step into the world of the franchise business,
                you can always count up on us, as we present you with the most
                exciting business opportunities to establish your own business.
                Grab Abundance of Franchise Opportunities Here! If you are
                someone, who wants to reap the benefits out of franchise
                opportunities in India, Franchise Apply is certainly the right
                place, to begin with. Being an investor if you think that is
                fruitful to associate with a well-established brand, then you
                will find us the perfect companion to execute your further
                plans. We bring you a chance to connect with a top franchise in
                India and seek the opportunity to grow as an investor. Whether
                you want to join us as an investor or want to advertise your
                profitable franchise in India, we are always ready to help. You
                can browse through our huge list to seize the opportunity to
                start the best franchise business in India. At Franchise Apply,
                we offer oodles of options that match your needs for starting
                with low cost franchise. In fact, you can gather reliable
                information about the specific franchise in India with low
                investment here. Since we always believe in assisting everyone
                to grow, you can always count on us for the opportunities that
                we bring to the table for you. Check the franchise listed here
                and choose to take benefits out of what suits you the most.
              </p>
            </div>
          </div>
        </Collapse>
        <button
          className="collapse-btn"
          onClick={() => setOpen(!open)}
          aria-controls="collapse-content"
          aria-expanded={open}
        >
          {open ? "Show Less" : "Show More"}
          {open ? (
            <RiSubtractLine className="p-1" />
          ) : (
            <FaPlus className="p-1" />
          )}
        </button>
      </div>
    </>
  );
};

export default Home;
