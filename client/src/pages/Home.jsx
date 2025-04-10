import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, Collapse } from "react-bootstrap";
import { FaCar } from "react-icons/fa";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { BsHeartPulse } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaBuildingWheat } from "react-icons/fa6";
import { GiAtomicSlashes } from "react-icons/gi";
import { MdPhonelink } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { RiSubtractLine } from "react-icons/ri";
import { MdDoubleArrow } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import Brand from "../components/Brand";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

import { TestData } from "../constant/TestData";
const Home = () => {
  const navigate = useNavigate();

  const categories = [
    "All Categories",
    "Automobiles",
    "Beauty and Salon",
    "Business Services",
    "Courier Logistics",
    "Dealers and Distributors",
    "Education",
    "Electronics",
    "Food and Beverage",
    "Health and Beverage",
    "Power and Energy",
    "Retail",
  ];

  const investmentRanges = [
    "Investment Range",
    "10k - 3 Lakhs",
    "3 Lakhs - 5 Lakhs",
    "5 Lakhs - 10 Lakhs",
    "10 Lakhs - 20 Lakhs",
    "20 Lakhs- 50 Lakhs",
    "50 Lakhs- 1 Cr",
    "More Than 2 Cr",
  ];

  // 🧠 Convert investment strings to numbers for comparison
  const parseInvestment = (str) => {
    if (!str) return [0, 0];

    const normalized = str
      .toLowerCase()
      .replace(/inr|gst|,/gi, "")
      .replace(/\s+/g, "")
      .replace(/k/g, "000")
      .replace(/lakhs?/g, "00000")
      .replace(/lakh/g, "00000")
      .replace(/cr/g, "0000000")
      .match(/\d+/g);

    if (!normalized || normalized.length === 0) return [0, 0];

    const nums = normalized.map(Number);
    return [Math.min(...nums), Math.max(...nums)];
  };

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedInvestment, setSelectedInvestment] =
    useState("Investment Range");
  const [filteredData, setFilteredData] = useState(Object.entries(TestData));
  const [visibleCount, setVisibleCount] = useState(20);

  const handleSearch = () => {
    let filtered = Object.entries(TestData);

    // Category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(
        ([, item]) => item.category === selectedCategory
      );
    }

    // Investment filter
    if (selectedInvestment && selectedInvestment !== "Investment Range") {
      const [min, max] = parseInvestment(selectedInvestment);

      filtered = filtered.filter(([_, item]) => {
        const [itemMin, itemMax] = parseInvestment(
          item.details.investment_required
        );
        return (
          (itemMin >= min && itemMin <= max) ||
          (itemMax >= min && itemMax <= max) ||
          (itemMin <= min && itemMax >= max) // full range overlap
        );
      });
    }

    setFilteredData(filtered);
    setVisibleCount(20); // Reset visible count on new search
  };

  const handleExplore = (id) => {
    navigate(`/explore/${id}`);
  };

  const showMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  const visibleData = filteredData.slice(0, visibleCount);
  console.log(visibleData);
  return (
    <div div className="home-section">
      {/* Bottom Filter Section */}
      <div className="row bottom-row m-0">
        <div className="col-12 col-md-3 p-0">
          <Link href="/" className="bottom-link">
            GET CHANNEL PARTNERS :{" "}
            <span style={{ color: "red", paddingLeft: "3px" }}>
              {" "}
              REGISTER NOW <MdDoubleArrow />
            </span>
          </Link>
        </div>

        {/* Filter section */}
        <div className="col-12 col-md-6 p-0 search-bar">
          <div className="row m-0 p-0 align-items-center justify-content-center">
            <div className="col p-0">
              <select
                className="form-select custom-dropdown"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="col p-0">
              <select
                className="form-select custom-dropdown"
                value={selectedInvestment}
                onChange={(e) => setSelectedInvestment(e.target.value)}
              >
                {investmentRanges.map((range) => (
                  <option key={range}>{range}</option>
                ))}
              </select>
            </div>
            <div className="col p-0">
              <button onClick={handleSearch} className="btn btn-primary w-100">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-3 p-0">
          <Link href="/" className="bottom-link">
            EXPLORE YOUR :
            <span style={{ color: "red", paddingLeft: "3px" }}>
              {" "}
              BRAND
              <MdDoubleArrow />
            </span>{" "}
          </Link>
          <Link href="/" className="bottom-link">
            START A BUSINESS :{" "}
            <span style={{ color: "red", paddingLeft: "3px" }}>
              REGISTER NOW <MdDoubleArrow />
            </span>{" "}
          </Link>
        </div>
      </div>

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
                <Link to="/category/automobiles">
                  <FaCar /> Automobiles
                </Link>
              </li>
              <li>
                <Link to="/category/beauty-and-salon">
                  <MdFaceRetouchingNatural /> Beauty and Salon
                </Link>
              </li>
              <li>
                <Link to="/category/business-services">
                  <FaTools /> Business Services
                </Link>
              </li>
              <li>
                <Link to="/category/dealers-and-distributors">
                  <FaTruck /> Dealers and Distributors
                </Link>
              </li>
              <li>
                <Link to="/category/education">
                  <FaBookReader /> Education
                </Link>
              </li>
              <li>
                <Link to="/category/health-and-wellness">
                  <BsHeartPulse /> Health and Wellness
                </Link>
              </li>
              <li>
                <Link to="/category/food-and-beverage">
                  <ImSpoonKnife /> Food and Beverage
                </Link>
              </li>
              <li>
                <Link to="/category/retail">
                  <SiHomeassistantcommunitystore /> Retail
                </Link>
              </li>
              <li>
                <Link to="/category/courier-logistics">
                  <FaBuildingWheat /> Courier Logistics
                </Link>
              </li>
              <li>
                <Link to="/category/power-and-energy">
                  <GiAtomicSlashes /> Power and Energy
                </Link>
              </li>
              <li>
                <Link to="/category/electronics">
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
            <div className="row">
              {visibleData.length > 0 ? (
                visibleData.map(([id, item]) => (
                  <div className="col-12 col-md-3 mb-4" key={id}>
                    <div className="border m-1 shadow-sm rounded">
                      <div className="d-flex align-items-center justify-content-center border m-1 rounded p-2 bg-light">
                        <img
                          src={item.details.logo_image}
                          className="img-fluid image-sec rounded"
                          alt={item.details.franchise_name}
                        />
                      </div>

                      <div className="p-2">
                        {/* text-div */}
                        <p style={{ fontSize: "12px" }}>{item.category}</p>
                        <p className="line-clamp-1 fw-semibold">
                          {item.details.franchise_name}
                        </p>
                        <div className="d-flex justify-content-between py-1 align-items-center">
                          <p
                            className="mb-0 fw-bold w-50"
                            style={{ fontSize: "14px", color: "#6f6f6f" }}
                          >
                            Investment :
                          </p>
                          <p
                            className="mb-0 fw-bold line-clamp-1"
                            style={{ fontSize: "14px", color: "#6f6f6f" }}
                          >
                            {item.details.investment_required}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center py-1">
                          <p
                            className="mb-0 fw-bold w-100"
                            style={{ fontSize: "14px", color: "#6f6f6f" }}
                          >
                            Space req :
                          </p>
                          <p
                            className="mb-0 fw-bold line-clamp-1 w-100 text-end"
                            style={{ fontSize: "14px", color: "#6f6f6f" }}
                          >
                            {item.details.required_floor_area}
                          </p>
                        </div>
                        <button
                          className="btn btn-outline-primary w-100 mt-2"
                          onClick={() => handleExplore(id)}
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h2 className="text-center py-5">Data added soon</h2>
              )}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredData.length && (
              <div className="text-center my-4">
                <button onClick={showMore} className="btn btn-outline-primary">
                  Load More
                </button>
              </div>
            )}
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
                    src="https://i.ibb.co/v4WSh82k/site-8-img1.png"
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

      <div className="container">
        {/* New Arrivals Brand */}
        <Brand />
      </div>

      {/* Blog Section */}

      {/* <div className="container">
        <Testimonials />
      </div>

      <div className="container">
        <Gallery />
      </div>

      <div className="container">
        <MagazineCarousel />
      </div> */}

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
    </div>
  );
};

export default Home;
