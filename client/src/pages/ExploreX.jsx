import React from "react";
import { FaThumbsUp, FaShareAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../styles/explore.css";

const Explore = () => {
  const { id } = useParams();
  const location = useLocation();
  const card = location.state?.card;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  // Watch the 'terms' checkbox
  const isTermsAccepted = watch("terms", false); // default value is false
  // if (!card) {
  //   return <p>Card data not available. Please go back and try again.</p>;
  // }

  return (
    <div className="container p-0">
      <div className="row my-4 align-items-center justify-content-center">
        <div className="col-12 col-md-3 border p-2 d-flex align-items-center justify-content-center">
          <img src="https://drive.usercontent.google.com/download?id=1fFn0it_hIygBKP2YNRf14u5fxjO0zJW9&export=view&authuser=0"
            className="img-fluid rounded-circle"
            style={{ maxHeight: "100px" }}
          />
        </div>

        <div className="col-12 col-md-9 ">
          <h4>Title</h4>
          <div className="border p-4">
            <button className="explore-btn p-2">Business Detail</button>
            <button className="explore-btn p-2">Investment</button>
            <button className="explore-btn p-2">Training</button>
            <button className="explore-btn p-2">Website</button>
            <button className="explore-btn p-2">
              Agreement & Term Details
            </button>
          </div>
        </div>
      </div>

      <div className="container p-0">
        <div
          className="row  p-4 border border-2"
          style={{
            background: "#f3f3f3",
            borderColor: "#dedede",
            borderRadius: "8px",
          }}
        >
          <div className="col border-end border-black d-flex align-items-center justify-content-center">
            <div>
              <h6 className="mb-0">Investment Required</h6>
              <small>Investment</small>
            </div>
          </div>
          <div className="col border-end border-black d-flex align-items-center justify-content-center">
            <div>
              <h6 className="mb-0">Space Required</h6>
              <small>card Space</small>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <div>
              <h6 className="mb-0">Franchise Outlets</h6>
              <small>170+</small>
            </div>
          </div>
        </div>
      </div>

      <div className="container border border-secondary border-1 rounded my-4">
        <div className="my-2">
          <img
            src="https://www.franchiseapply.com/admin/uploads/brand_registration/1737462792_3.jpg"
            alt="banner_image"
            className="img-fluid"
          />
        </div>
      </div>

      <div className="container p-0 ">
        <div className="row my-4  my-5">
          {/* Left Col */}
          <div className="col-12 col-md-8 p-0">
            <div className="border-color p-3">
              <h6 className="fw-semibold border-bottom pb-2">
                BUSINESS DETAILS
              </h6>
              <p className="fw-semibold text-decoration-underline font-color">
                About Us
              </p>
              <p className="font-color pb-0 description-section">
                Mr. Gurpreet Singh and Mr. Arvinder Singh are the visionary
                founders of "Veerji Malai Chaap Wale." They pioneered the
                concept of integrating chaap into vegetarian cuisine,
                recognizing the desire of many people for the flavors of
                non-vegetarian food while staying true to a vegetarian diet.
                With this insight, they decided to create a unique vegetarian
                menu that replicates the taste of non-vegetarian dishes. In
                their quest to make vegetarian food as flavorful and appealing
                as its non-vegetarian counterparts, they introduced innovative
                names for their dishes, such as “Veg Chicken,” “Veg Mutton,”
                “Veg Fish,” “Veg Biryani,” “Sunny Leone Chaap,” “Mia Khalifa
                Chaap,” and many others. These creative names were designed to
                capture customers' curiosity and interest. Their mission has
                always been to provide the rich and savory experience of
                non-vegetarian cuisine using only vegetarian ingredients. Since
                the opening of their first outlet in 2012 in Geeta Colony,
                followed by Laxmi Nagar in Delhi, and several other locations
                across India, their brand has grown immensely. The demand for
                their delicious, vegetarian dishes that mimic the taste of
                non-vegetarian food continues to rise across the country. The
                journey began with a focus on pure soya, and they have since
                expanded their offerings while staying true to the core of their
                concept: delivering mouthwatering vegetarian food that satisfies
                the cravings of even the most ardent non-veg lovers. Team
                Franchise Apply
              </p>
            </div>

            <div className="border-color p-3 my-3">
              <h6 className="fw-semibold border-bottom pb-2">
                FRANCHISE INVESTMENT REQUIREMENTS:
              </h6>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Single Unit</td>
                      <td>INR 20 L - INR 22 L</td>
                    </tr>
                    <tr>
                      <td>Brand Fee</td>
                      <td>INR 10 L + 18% GST</td>
                    </tr>
                    <tr>
                      <td>Equipments</td>
                      <td>INR 4 L + Raw Material INR 2 L</td>
                    </tr>
                    <tr>
                      <td>Furniture And Fixtures</td>
                      <td>INR 1 L</td>
                    </tr>
                    <tr>
                      <td>Advertising / Marketing</td>
                      <td>INR 1 L</td>
                    </tr>
                    <tr>
                      <td>Expected Pay Back Period</td>
                      <td>18 Months</td>
                    </tr>
                    <tr>
                      <td>
                        The Expected Return On Investment To The Franchisee
                      </td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Any Other Investment Needed</td>
                      <td>NO</td>
                    </tr>
                    <tr>
                      <td>Looking Expansion In Areas</td>
                      <td>Rajasthan, Gujarat, Maharashtra</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-color p-3 my-3">
              <h6 className="fw-semibold border-bottom pb-2">
                FRANCHISE TRAINING DETAILS:
              </h6>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Field Assistance Available For Franchisees:</td>
                      <td>YES</td>
                    </tr>
                    <tr>
                      <td>Franchise Traning programme:</td>
                      <td>INR 10 L + 18% GST</td>
                    </tr>
                    <tr>
                      <td>Detailed Operating Manuals For Franchisees:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Need of IT System:</td>
                      <td>Computer</td>
                    </tr>
                    <tr>
                      <td>Assistance From Head Office To Franchisee:</td>
                      <td>YES</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-color p-3 my-3">
              <h6 className="fw-semibold border-bottom pb-2">
                FRANCHISE INVESTMENT REQUIREMENTS:
              </h6>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Required Property For This Franchise Opportunity:</td>
                      <td>Commercial Or High Residential</td>
                    </tr>
                    <tr>
                      <td>Required Floor Area:</td>
                      <td>200 Sq Ft - 250 Fq Ft</td>
                    </tr>
                    <tr>
                      <td>Preferred Location For Unit Franchise:</td>
                      <td>Mall,Commercial Building</td>
                    </tr>
                    <tr>
                      <td>Office Staff Required:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Computer / System :</td>
                      <td>Yes(One Laptop)</td>
                    </tr>
                    <tr>
                      <td>Internet Connection :</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row">
              {/* Franchise Website Details */}
              <div className="col-lg-6 col-md-12">
                <div className="border-color p-3">
                  <h6 className="fw-semibold border-bottom pb-2">
                    FRANCHISE WEBSITE DETAILS:
                  </h6>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Email</td>
                        <td>Email</td>
                      </tr>
                      <tr>
                        <td>Website Url</td>
                        <td>
                          <a
                            href="https://www.veerjifoods.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            www.veerjifoods.com
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Franchisee Other Details */}
              <div className="col-lg-6 col-md-12">
                <div className="border-color p-3">
                  <h6 className="fw-semibold border-bottom pb-2">
                    FRANCHISE WEBSITE DETAILS:
                  </h6>
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Email</td>
                        <td>admin@jaishreejewellers.in</td>
                      </tr>
                      <tr>
                        <td>Website Url</td>
                        <td>
                          <a
                            href="https://www.veerjifoods.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            www.veerjifoods.com
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Right Col */}
          <div className="col-12 col-md-4">
            {/* first div */}
            <div className="border-color py-3">
              {/* Rating and Likes Section */}
              <div className="d-flex align-items-center justify-content-center mb-2">
                <div className="rating me-2">
                  {[...Array(5)].map((_, i) => (
                    <CiStar key={i} className="star" />
                  ))}
                </div>
                <span className="likes">3k Likes</span>
              </div>

              {/* Buttons Section */}
              <div className="button-section d-flex justify-content-center">
                <button className="btn btn-light d-flex align-items-center">
                  <FaThumbsUp className="me-2" /> Like
                </button>
                <button className="btn btn-light d-flex align-items-center">
                  <CiStar className="me-2" /> Rate
                </button>
                <button className="btn btn-light d-flex align-items-center">
                  <FaShareAlt className="me-2" /> Share
                </button>
              </div>
            </div>

            <div className="my-4 border-color p-3">
              <h6 className="mb-3">APPLY FOR FRANCHISE</h6>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("fullName")}
                  type="text"
                  className="form-control mb-2"
                  placeholder="Full Name"
                />
                <input
                  {...register("email")}
                  type="email"
                  className="form-control mb-2"
                  placeholder="Email"
                />
                <input
                  {...register("mobile")}
                  type="tel"
                  className="form-control mb-2"
                  placeholder="Mobile Number"
                />

                <select {...register("country")} className="form-select mb-2">
                  <option value="India">India</option>
                </select>

                <select {...register("state")} className="form-select mb-2">
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                  {/* Add more states */}
                </select>

                <input
                  {...register("city")}
                  type="text"
                  className="form-control mb-2"
                  placeholder="City"
                />
                <input
                  {...register("zipcode")}
                  type="text"
                  className="form-control mb-2"
                  placeholder="Zipcode"
                />
                <textarea
                  {...register("address")}
                  className="form-control mb-2"
                  placeholder="Address"
                  rows="3"
                ></textarea>

                <div className="form-check mb-2">
                  <input
                    {...register("terms", { required: true })}
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I/we have carefully read and agree to the terms and
                    conditions.
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-danger w-100"
                  disabled={!isTermsAccepted}
                >
                  APPLY NOW
                </button>
              </form>

              <h6 className="mt-4">More Related Brand</h6>
              <ul className="list-unstyled">
                {[
                  "Chicka Litti",
                  "Veer Ji Malai Chaap Wale",
                  "Waff hill",
                  "Panwaadi",
                  "Winooars pizza",
                  "Mr. Sandwich",
                  "Fiery Pot",
                  "WRAPKING",
                  "GRILLKARLO",
                  "90 Degrees",
                ].map((brand, index) => (
                  <li key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                    />{" "}
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
