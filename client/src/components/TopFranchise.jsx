import React, { useState } from "react";
import { TestData } from "../constant/TestData";
import { Link, useNavigate } from "react-router-dom";

const TopFranchise = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(8);

  const parseInvestment = (invStr) => {
    const cleanStr = invStr.replace(/INR|\₹|,/g, "").toUpperCase();
    const matches = cleanStr.match(/\d+(\.\d+)?\s*[KLCR]+/g);
    if (!matches) return 0;

    const unitMap = { K: 0.001, L: 1, CR: 100 };
    const toLakhs = (val) => {
      const num = parseFloat(val);
      const unit = val.match(/[A-Z]+/)?.[0] || "L";
      return num * (unitMap[unit] || 1);
    };

    return Math.max(...matches.map(toLakhs));
  };

  const topFranchises = Object.entries(TestData).filter(([_, item]) => {
    const invest = item.details.investment_required || "";
    return parseInvestment(invest) >= 50;
  });

  const visibleFranchises = topFranchises.slice(0, visibleCount);

  const handleExplore = (id) => {
    navigate(`/explore/${id}`);
  };

  return (
    <div className="container border rounded shadow-sm my-4">
      <div className="d-flex align-items-center my-3">
        <div className="franchise-box text-uppercase">
          Top Premium Franchise Opportunities
        </div>
        <div className="franchise-lines w-100">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className="row">
        {visibleFranchises.map(([id, item]) => (
          <div key={id} className="col-12 col-md-3 mb-4">
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
        ))}
      </div>

      {visibleCount < topFranchises.length && (
        <div className="text-center my-4">
          <button
            className="btn btn-outline-primary"
            onClick={() => setVisibleCount(visibleCount + 10)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default TopFranchise;
