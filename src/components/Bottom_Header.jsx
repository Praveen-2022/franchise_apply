import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import "../styles/borderbottom.css"

const Bottom_Header = () => {
  const [category, setCategory] = useState("");
  const [investmentRange, setInvestmentRange] = useState("");

  const categories = [
    "All Categories",
    "Technology",
    "Food & Beverage",
    "Retail",
    "Healthcare",
    "Education",
  ];

  const investmentRanges = [
    "Select Range",
    "0 - 5 Lakhs",
    "5 - 10 Lakhs",
    "10 - 20 Lakhs",
    "20 - 50 Lakhs",
    "50+ Lakhs",
  ];

  const handleSearch = () => {
    console.log("Search clicked with:", { category, investmentRange });
    // Add your search logic here
  };
  return (
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select custom-dropdown"
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat === "All Categories" ? "Select Category" : cat}
                </option>
              ))}
            </select>
          </div>
          <div className="col p-0">
            <select
              value={investmentRange}
              onChange={(e) => setInvestmentRange(e.target.value)}
              className="form-select custom-dropdown"
            >
              {investmentRanges.map((range, index) => (
                <option key={index} value={range}>
                  {range === "Select Range" ? "Investment Range" : range}
                </option>
              ))}
            </select>
          </div>
          <div className="col p-0">
            <button className="btn search-button" onClick={handleSearch}>
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
  );
};

export default Bottom_Header;
