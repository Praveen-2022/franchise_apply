import React from "react";
import { FaSearch, FaTh } from "react-icons/fa";
import "../styles/masterfranchise.css";

const MasterFranchise = () => {
  return (
    <>
      <div className="container-fluid bg-light px-3 py-2 d-flex align-items-center justify-content-between">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-4">
            <div>
              <p className="mb-0 fw-semibold">
                Automotive Franchise, Automotive Business Franchise, Automotive
                Franchise Opportunities
              </p>
              <small className="text-muted">
                (Showing 0 - 12 Opportunities of 488 Opportunities)
              </small>
            </div>
          </div>
          <div className=" col-12 col-md-4 p-2">
            <div className="d-flex">
              <select className="form-select custom-select">
                <option>Select Category</option>
              </select>
              <select className="form-select custom-select">
                <option>Investment Range</option>
              </select>
              <button className="btn btn-danger d-flex align-items-center justify-content-center custom-select">
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-center justify-content-center bg-white py-1">
              <ul className=" sorting-options">
                <li className="sort-option">
                  <a className=" text-dark" href="#">
                    A - Z
                  </a>
                </li>
                <li className="sort-option">
                  <a className="text-dark" href="#">
                    Z - A
                  </a>
                </li>
                <li className=" sort-option">
                  <a className=" text-dark" href="#">
                    Old - New
                  </a>
                </li>
                <li className="sort-option">
                  <a className="text-dark" href="#">
                    New - Old
                  </a>
                </li>
              </ul>
              <button className="btn btn-danger d-flex align-items-center justify-content-center">
                <FaTh />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row border">
          <div className="col-12 col-md-3 border">
            <div
              className="p-3 border rounded bg-white"           >
              <div className="mb-2">
                <label className="fw-bold">State:</label>
                <select className="form-select">
                  <option>Select State</option>
                </select>
              </div>
              <div className="mb-3">
                <select className="form-select">
                  <option>Investment Range</option>
                </select>
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-success">Reset</button>
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-9 border">1</div>
        </div>
      </div>
    </>
  );
};

export default MasterFranchise;
