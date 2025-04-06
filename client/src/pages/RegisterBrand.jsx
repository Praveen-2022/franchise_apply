import React from "react";
import { Link } from "react-router-dom";
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
import { FaAngleRight } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Carousel } from "react-bootstrap";
import "../styles/registerbrand.css";

const RegisterBrand = () => {
  const images = [
    "https://franchiseapply.com/admin/uploads/slider/fmagazine/793927.jpg",
    "https://franchiseapply.com/admin/uploads/slider/fmagazine/323468.jpg",
    "https://franchiseapply.com/admin/uploads/slider/fmagazine/949341.jpg",
    "https://franchiseapply.com/admin/uploads/slider/fmagazine/360953.jpg",
    "https://franchiseapply.com/admin/uploads/slider/fmagazine/393731.jpg",
    "https://franchiseapply.com/admin/uploads/slider/fmagazine/106907.jpg",
    "https://franchiseapply.com/admin/uploads/slider/fmagazine/246384.jpg",
    "https://franchiseapply.com/admin/uploads/slider/fmagazine/810590.jpg",
    "https://franchiseapply.com/admin/uploads/slider/fmagazine/839866.jpg",
    "https://franchiseapply.com/admin/uploads/slider/fmagazine/255550.jpg",
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <section className="">
      <div className="container my-3">
        <div className="row">
          <div className="col franchise-section">
            <p className="text-center">Top Franchise Opportunity</p>
            <p className="text-center fw-bold" style={{ color: "#1abc9c" }}>
              OPPORTUNITIES
            </p>
            <Link className="dc-btn">Explore All</Link>
          </div>
          <div className="col franchise-section">
            <p className="text-center">Top Premium Franchise</p>
            <p className="text-center fw-bold" style={{ color: "#3fabf3" }}>
              OPPORTUNITIES
            </p>
            <Link className="dc-btn" style={{ borderColor: "#3fabf3" }}>
              Explore All
            </Link>
          </div>
          <div className="col franchise-section">
            <p className="text-center">Master Franchise</p>
            <p className="text-center fw-bold" style={{ color: "#9b59b6" }}>
              OPPORTUNITIES
            </p>
            <Link className="dc-btn" style={{ borderColor: "#9b59b6" }}>
              Explore All
            </Link>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          <aside className="col-12 col-lg-3 invester-bar ">
            <div className="ul-div">
              <ul>
                <li>
                  <a href="/">
                    <FaCar /> Automobiles
                  </a>
                </li>
                <li>
                  <a href="/">
                    <MdFaceRetouchingNatural /> Beauty and Salon
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaTools /> Business Services
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaTruck /> Dealers and Distributors
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FcReading /> Education
                  </a>
                </li>
                <li>
                  <a href="/">
                    <BsHeartPulse /> Health and Wellness
                  </a>
                </li>
                <li>
                  <a href="/">
                    <ImSpoonKnife /> Food and Beverage
                  </a>
                </li>
                <li>
                  <a href="/">
                    <SiHomeassistantcommunitystore /> Retail
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaBuildingWheat /> Courier Logistics
                  </a>
                </li>
                <li>
                  <a href="/">
                    <GiAtomicSlashes /> Power and Energy
                  </a>
                </li>
                <li>
                  <a href="/">
                    <MdPhonelink /> Electronics
                  </a>
                </li>
              </ul>
              <hr />
              <ul>
                <li>
                  <a href="/">
                    <FaAngleRight /> News
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaAngleRight /> Magazine
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaAngleRight /> Videos
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaAngleRight /> Advertise with us
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaAngleRight /> Interviews
                  </a>
                </li>
              </ul>
              <hr />
              <ul>
                <div className="carousel-container p-2">
                  <h6>Franchise Magazine</h6>
                  <Carousel interval={3000} indicators={false}>
                    {images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="img-fluid"
                          src={image}
                          alt={`Slide ${index}`}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </ul>
            </div>
          </aside>

          <div className="col-12 col-lg-9">
            <div className="shadow p-3">
              <div className="d-flex align-items-center">
                <div className="franchise-box">Start Your Own Business : 9216473404
                </div>
                <div className="franchise-lines w-100">
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
              <h4 className="py-2">Invester Registration :</h4>

              <form className="bg-white " onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("firstName", { required: true })}
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <span className="text-danger">
                        First name is required
                      </span>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("lastName", { required: true })}
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <span className="text-danger">Last name is required</span>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Mobile:</label>
                    <input
                      type="tel"
                      className="form-control"
                      {...register("mobile", { required: true })}
                      placeholder="Mobile"
                    />
                    {errors.mobile && (
                      <span className="text-danger">
                        Mobile number is required
                      </span>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      {...register("email", { required: true })}
                      placeholder="E-mail"
                    />
                    {errors.email && (
                      <span className="text-danger">Email is required</span>
                    )}
                  </div>
                  <div className="col-12">
                    <label className="form-label">Address:</label>
                    <textarea
                      className="form-control"
                      {...register("address")}
                      placeholder="Address"
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City:</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("city")}
                      placeholder="City"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Country:</label>
                    <select className="form-select" {...register("country")}>
                      <option>India</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">State:</label>
                    <select className="form-select" {...register("state")}>
                      <option>Select State</option>
                      <option>Andaman & Nicobar (UT)</option>
                      <option>Andhra Pradesh</option>
                      <option>Arunachal Pradesh</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>Chandigarh (UT)</option>
                      <option>Chhattisgarh</option>
                      <option>Dadra & Nagar Haveli (UT)</option>
                      <option>Daman & Diu (UT)</option>
                      <option>Delhi</option>
                      <option>Goa</option>
                      <option>Gujarat</option>
                      <option>Haryana</option>
                      <option>Himachal Pradesh</option>
                      <option>Jammu & Kashmir</option>
                      <option>Jharkhand</option>
                      <option>Karnataka</option>
                      <option>Kerala</option>
                      <option>Lakshadweep (UT)</option>
                      <option>Madhya Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Manipur</option>
                      <option>Meghalaya</option>
                      <option>Mizoram</option>
                      <option>Nagaland</option>
                      <option>Odisha</option>
                      <option>Puducherry (UT)</option>
                      <option>Punjab</option>
                      <option>Rajasthan</option>
                      <option>Sikkim</option>
                      <option>Tamil Nadu</option>
                      <option>Telangana</option>
                      <option>Tripura</option>
                      <option>Uttar Pradesh</option>
                      <option>Uttarakhand</option>
                      <option>West Bengal</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Pincode:</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("pincode")}
                      placeholder="Zipcode"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">
                      Select Available Capital:
                    </label>
                    <select className="form-select" {...register("capital")}>
                      <option>Select Available Capital</option>
                      <option>Rs. 10000 - Rs. 50000</option>
                      <option>Rs. 50000 - Rs. 2 Lac </option>
                      <option>Rs. 2 Lac - Rs. 5 Lac</option>
                      <option>Rs. 5 Lac - Rs. 10 Lac</option>
                      <option>Rs. 10 Lac - Rs. 25 Lac</option>
                      <option>Rs. 25 Lac - Rs. 50 Lac</option>
                      <option>Rs. 50 Lac - Rs. 1 Cr</option>
                      <option>Rs. 1 Cr - Rs. 2 Cr</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">
                      Select Start-up Timeframe:
                    </label>
                    <select className="form-select" {...register("timeframe")}>
                      <option>Select Start-up Time Frame</option>
                      <option>Less than 3 Months</option>
                      <option>3 month - 6 month</option>
                      <option>6 month - 12</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Start up Location:</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("location")}
                      placeholder="Start-up Location"
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="newsletter"
                        {...register("newsletter")}
                      />
                      <label className="form-check-label" htmlFor="newsletter">
                        Yes, I want to subscribe for weekly Newsletter
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="terms"
                        {...register("terms", { required: true })}
                      />
                      <label className="form-check-label" htmlFor="terms">
                        I/We have carefully read and agree to the{" "}
                        <a href="#">terms and conditions</a>
                      </label>
                      {errors.terms && (
                        <span className="text-danger">
                          You must accept the terms
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-danger w-100">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterBrand;
