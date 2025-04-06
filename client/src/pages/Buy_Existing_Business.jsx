import React from "react";
import { useForm, Controller } from "react-hook-form";
import { CiSearch } from "react-icons/ci";
import "../styles/buybusiness.css";

const stateCityData = {
  Maharastra: ["Mumbai", "Pune", "Nagpur"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra"],
  Delhi: ["New Delhi", "Dwarka", "Rohini"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur"],
};

const Buy_Existing_Business = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      state: "",
      city: "",
      minInvestment: 10000,
      maxInvestment: 64400000,
    },
  });

  const selectedState = watch("state");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // Clear form fields
  };

  return (
    <>
      <div
        className="row p-2 m-0 justify-content-between align-items-center"
        style={{ background: "#ebebeb" }}
      >
        <div className="col">
          <h6 className="mb-0 font-color" style={{ fontSize: "14px" }}>
            Automotive Franchise, Automotive Business Franchise, Automotive
            Franchise Opportunities
          </h6>
          <p className="font-color" style={{ fontSize: "13px" }}>
            {" "}
            (Showing 0 - 4 Opportunities of 4 Opportunities)
          </p>
        </div>
        <div className="col">
          <div>
            <div className="input-group category-search">
              <select className="form-select" aria-label="Select Category">
                <option defaultValue>Select Category</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
              <button to="/" className="btn btn-danger" type="button">
                <CiSearch />
              </button>
            </div>
          </div>
        </div>

        <div className="sorting-container p-2 col">
          <div className="d-flex align-items-center justify-content-center">
            <ul className="sorting-options d-flex bg-white px-3 py-2">
              <li className="sort-option">A - Z</li>
              <li className="sort-option">Z - A</li>
              <li className="sort-option">Old - New</li>
              <li className="sort-option">New - Old</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <div className="col-12 col-lg-3">
            <div className="px-2 py-3 border rounded">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Select State */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Select State</label>
                  <Controller
                    name="state"
                    control={control}
                    rules={{ required: "State is required" }}
                    render={({ field }) => (
                      <select className="form-select" {...field}>
                        <option value="">Select State</option>
                        {Object.keys(stateCityData).map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    )}
                  />
                  {errors.state && (
                    <span className="text-danger">{errors.state.message}</span>
                  )}
                </div>

                {/* Select City */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Select City</label>
                  <Controller
                    name="city"
                    control={control}
                    rules={{ required: "City is required" }}
                    render={({ field }) => (
                      <select
                        className="form-select"
                        {...field}
                        disabled={!selectedState}
                      >
                        <option value="">Select City</option>
                        {selectedState &&
                          stateCityData[selectedState].map((city, index) => (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          ))}
                      </select>
                    )}
                  />
                  {errors.city && (
                    <span className="text-danger">{errors.city.message}</span>
                  )}
                </div>

                {/* Investment Range */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Investment Range</label>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Min Investment */}
                    <Controller
                      name="minInvestment"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="number"
                          className="form-control me-2"
                          {...field}
                        />
                      )}
                    />

                    <span className="fw-bold">to</span>

                    {/* Max Investment */}
                    <Controller
                      name="maxInvestment"
                      control={control}
                      render={({ field }) => (
                        <input
                          type="number"
                          className="form-control ms-2"
                          {...field}
                        />
                      )}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button className="btn btn-primary w-100" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              <div className="col  mx-1 rounded shadow-sm border">
                <div className="py-2">
                  <img
                    src="https://www.franchiseapply.com/admin/uploads/buy_existing_business/788413.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <div className="">
                    <h6 className="text-danger">EV Bikes Showroom On Sales</h6>
                    <div className="d-flex align-items-center gap-2 font-color">
                      <h6 className="mb-0 font-color">Asking Price:</h6>
                      <p className="mb-0 font-color">
                        Rs.30 (Inventory Charges Extra)
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 font-color">
                      <h6 className="mb-0 font-color">Property Size</h6>{" "}
                      <p className="mb-0 font-color">5000 Sq Feet</p>
                    </div>
                    <div className="d-flex align-items-center gap-2 font-color">
                      <h6 className="mb-0 font-color">Rental</h6>{" "}
                      <p className="mb-0 font-color">Rs.1Lakhs</p>
                    </div>
                    <button className="subscribe-btn">GET FREE INFO</button>
                  </div>
                </div>
              </div>
              <div className="col  mx-1 rounded shadow-sm border">
                <div className="py-2">
                  <img
                    src="https://www.franchiseapply.com/admin/uploads/buy_existing_business/788413.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <div className="">
                    <h6 className="text-danger">EV Bikes Showroom On Sales</h6>
                    <div className="d-flex align-items-center gap-2 font-color">
                      <h6 className="mb-0 font-color">Asking Price:</h6>
                      <p className="mb-0 font-color">
                        Rs.30 (Inventory Charges Extra)
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 font-color">
                      <h6 className="mb-0 font-color">Property Size</h6>{" "}
                      <p className="mb-0 font-color">5000 Sq Feet</p>
                    </div>
                    <div className="d-flex align-items-center gap-2 font-color">
                      <h6 className="mb-0 font-color">Rental</h6>{" "}
                      <p className="mb-0 font-color">Rs.1Lakhs</p>
                    </div>
                    <button className="subscribe-btn">GET FREE INFO</button>
                  </div>
                </div>
              </div>
              <div className="col  mx-1 rounded shadow-sm border">
                <div className="py-2">
                  <img
                    src="https://www.franchiseapply.com/admin/uploads/buy_existing_business/788413.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />
                  <div className="">
                    <h6 className="text-danger">EV Bikes Showroom On Sales</h6>
                    <div className="d-flex align-items-center gap-2 font-color">
                      <h6 className="mb-0 font-color">Asking Price:</h6>
                      <p className="mb-0 font-color">
                        Rs.30 (Inventory Charges Extra)
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 font-color">
                      <h6 className="mb-0 font-color">Property Size</h6>{" "}
                      <p className="mb-0 font-color">5000 Sq Feet</p>
                    </div>
                    <div className="d-flex align-items-center gap-2 font-color">
                      <h6 className="mb-0 font-color">Rental</h6>{" "}
                      <p className="mb-0 font-color">Rs.1Lakhs</p>
                    </div>
                    <button className="subscribe-btn">GET FREE INFO</button>
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

export default Buy_Existing_Business;
