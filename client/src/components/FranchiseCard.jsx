import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
const FranchiseCard = ({ id, details = {} }) => {
  const navigate = useNavigate();

  const {
    logo_image,
    franchise_name,
    category,
    investment_required,
    required_floor_area,
  } = details;
console.log(details);
  if (!logo_image || !franchise_name) {
    return null;
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="border m-1 shadow-sm rounded">
            <div className="d-flex align-items-center justify-content-center border m-1 rounded p-2 bg-light">
              <img
                src={logo_image}
                className="img-fluid image-sec rounded"
                alt={franchise_name}
              />
            </div>

            <div className="p-2">
              {/* text-div */}
              <p style={{ fontSize: "12px" }}>{category}</p>
              <p className="line-clamp-1 fw-semibold">{franchise_name}</p>
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
                  {investment_required}
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
                  className="mb-0 fw-bold text-end line-clamp-1 w-100"
                  style={{ fontSize: "14px", color: "#6f6f6f" }}
                >
                  {required_floor_area}
                </p>
              </div>
              <button
                className="btn btn-outline-primary w-100 mt-2"
                onClick={() => navigate(`/explore/${id}`)}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FranchiseCard;