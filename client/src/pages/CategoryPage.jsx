import React from "react";
import { Link, useParams } from "react-router-dom";
import { TestData } from "../constant/TestData";
import { CategoryData } from "../constant/CardData";
import FranchiseCard from "../components/FranchiseCard";
import { Carousel } from "react-bootstrap";
import { FaCar } from "react-icons/fa";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { BsHeartPulse } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaBuildingWheat } from "react-icons/fa6";
import { GiAtomicSlashes } from "react-icons/gi";
import { MdPhonelink } from "react-icons/md";
import "../styles/automobiles.css";

const CategoryPage = () => {
  const { name } = useParams();

  const normalize = (str) => str.toLowerCase().replace(/-/g, " ").trim();

  const formattedCategory = name.replace(/-/g, " ").toLowerCase();

  const filteredData = Object.entries(TestData).filter(([id, franchise]) => {
    return normalize(franchise.category || "") === formattedCategory;
  });
  const categoryEntry = Object.values(CategoryData).find(
    (item) => item.category.toLowerCase() === formattedCategory
  );

  const categoryDescription = categoryEntry?.details.description;
  const categoryImages = categoryEntry?.details.images;

  return (
    <div className="container mt-4">
      {/* Category Header Section */}
      {categoryEntry && (
        <>
          <h2 className="text-center mb-3">{categoryEntry.category}</h2>
          <div className="carousel-container">
            <Carousel
              interval={3000}
              controls={true}
              indicators={false}
              pause={false}
            >
              {categoryImages.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 img-fluid"
                    src={img}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="container">
            <div className="container my-3">
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
                  <div className="border rounded px-3 py-2 description-section overflow-y-scroll">
                    <p className="text-center">{categoryDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="row">
        {filteredData.length > 0 ? (
          filteredData.map(([id, franchise]) => (
            <div key={id} className="col-md-4 col-sm-6 mb-4">
              <FranchiseCard id={id} details={franchise.details} />
            </div>
          ))
        ) : (
          <p>No franchises found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
