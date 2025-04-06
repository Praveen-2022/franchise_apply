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

      <div className="container my-5">
        <div className="row">
          <aside className="col-12 col-md-3 ">
            <div className="p-3 border rounded bg-white">
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
          </aside>
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-12 col-md-4">
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
                      Quick Auto Service - Two Wheeler Multi Brand Service
                      Centre
                    </p>
                    <div className="d-flex justify-content-between py-1 align-items-center">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Member:
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Gold Member
                      </p>
                    </div>
                    <div className="d-flex justify-content-between py-1 align-items-center">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Category:
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Education
                      </p>
                    </div>
                    <div className="d-flex justify-content-between py-1 align-items-center">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Investment:
                      </p>
                      <p
                        className="mb-0 "
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        5Lacs - 8 Lacs
                      </p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center py-1">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Space req:
                      </p>
                      <p
                        className="mb-0 "
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
              <div className="col-12 col-md-4">
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
                      Quick Auto Service - Two Wheeler Multi Brand Service
                      Centre
                    </p>
                    <div className="d-flex justify-content-between py-1 align-items-center">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Member:
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Gold Member
                      </p>
                    </div>
                    <div className="d-flex justify-content-between py-1 align-items-center">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Category:
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Education
                      </p>
                    </div>
                    <div className="d-flex justify-content-between py-1 align-items-center">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Investment:
                      </p>
                      <p
                        className="mb-0 "
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        5Lacs - 8 Lacs
                      </p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center py-1">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Space req:
                      </p>
                      <p
                        className="mb-0 "
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
              <div className="col-12 col-md-4">
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
                      Quick Auto Service - Two Wheeler Multi Brand Service
                      Centre
                    </p>
                    <div className="d-flex justify-content-between py-1 align-items-center">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Member:
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Gold Member
                      </p>
                    </div>
                    <div className="d-flex justify-content-between py-1 align-items-center">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Category:
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Education
                      </p>
                    </div>
                    <div className="d-flex justify-content-between py-1 align-items-center">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Investment:
                      </p>
                      <p
                        className="mb-0 "
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        5Lacs - 8 Lacs
                      </p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center py-1">
                      <p
                        className="mb-0 fw-bold"
                        style={{ fontSize: "14px", color: "#6f6f6f" }}
                      >
                        Space req:
                      </p>
                      <p
                        className="mb-0 "
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
      </div>
    </>
  );
};

export default MasterFranchise;
