import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TestData } from "../constant/TestData";
import { useForm } from "react-hook-form";
import { CiStar } from "react-icons/ci";
import { FaThumbsUp, FaShareAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../styles/explore.css";
// import YouMakeLike from "../components/YouMakeLike";

const Explore = () => {
  const { id } = useParams();
  const currentFranchise = TestData[id];
  const navigate = useNavigate();

  const relatedFranchises = Object.entries(TestData).filter(
    ([key, item]) => item.category === currentFranchise.category && key !== id
  );

  console.log(relatedFranchises);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const isTermsAccepted = watch("terms", false);

  const onSubmit = (data) => {
    const templateParams = {
      full_name: data.fullName,
      email: data.email,
      mobile: data.mobile,
      country: data.country,
      state: data.state,
      city: data.city,
      zipcode: data.zipcode,
      address: data.address,
      franchise_name: franchise_name, // Inject franchise name here
    };

    emailjs
      .send(
        "service_ljz4sej",
        "template_vqsvfw9",
        templateParams,
        "_imW-V2n6pid_YxTE"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Form submitted successfully!");
          reset(); // clear form
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Failed to send form. Please try again.");
        }
      );
  };

  if (!currentFranchise) {
    return <h2 className="text-center mt-5">Franchise not found</h2>;
  }

  const {
    franchise_name,
    logo_image,
    banner_image,
    any_other_investment_needed,
    brand_fee,
    description,
    investment_required,
    space_required,
    franchise_outlets,
    video_url,
    advertising_marketing,
    expected_pay_back_period,
    franchise_traning_programme,
    the_expected_return_on_investment_to_the_franchisee,
    preferred_location_for_unit_franchise,
    single_unit,
    furniture_and_fixtures,
    equipments,
    field_assistance_available_for_franchisees,
    franchise_term,
    looking_expansion_in_areas,
    have_standard_franchise_agreement,
    website_url,
    email,
    required_floor_area,
    internet_connection,
    office_staff_required,
    computer_system,
    assistance_from_head_office_to_franchisee,
    required_property_for_this_franchise_opportunity,
    need_of_it_system,
    likes,
    detailed_operating_manuals_for_franchisees,
  } = currentFranchise.details;

  return (
    <div className="container p-0">
      <button
        onClick={() => navigate(-1)}
        style={{
          margin: "10px 0rem",
          background: "transparent",
          border: "none",
        }}
        className=""
      >
        ← Back
      </button>

      <div className="row my-4 align-items-center justify-content-center">
        <div className="col-12 col-md-3 border p-2 d-flex align-items-center justify-content-center">
          <img
            src={logo_image}
            className="img-fluid rounded-circle p-3"
            style={{ maxHeight: "100px" }}
          />
        </div>

        <div className="col-12 col-md-9 ">
          <h4>{franchise_name}</h4>
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

      <div className="container p-0 text-center">
        <div
          className="row  p-4 border border-2"
          style={{
            background: "#f3f3f3",
            borderColor: "#dedede",
            borderRadius: "8px",
          }}
        >
          <div className="col border-end border-black d-flex align-items-center justify-content-center ">
            <div>
              <h6 className="mb-0">Investment Required</h6>
              <small className="">{investment_required}</small>
            </div>
          </div>
          <div className="col border-end border-black d-flex align-items-center justify-content-center">
            <div>
              <h6 className="mb-0">Space Required</h6>
              <small>{space_required}</small>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <div>
              <h6 className="mb-0">Franchise Outlets</h6>
              <small>{franchise_outlets}</small>
            </div>
          </div>
        </div>
      </div>

      <div className="container border p-0 my-4">
        <img
          src={banner_image}
          alt={franchise_name}
          className="img-fluid w-100 p-3"
        />
      </div>

      <div className="container p-0 ">
        <div className="row my-4  my-5">
          {/* Left Col */}
          <div className="col-12 col-md-8 p-0">
            <div className="border-color p-3">
              <h6 className="fw-semibold border-bottom pb-2">
                BUSINESS DETAILS
              </h6>
              <p className="font-color pb-0 description-section">
                {description}
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
                      <td>{single_unit}</td>
                    </tr>
                    <tr>
                      <td>Brand Fee</td>
                      <td>{brand_fee}</td>
                    </tr>
                    <tr>
                      <td>Equipments</td>
                      <td>{equipments}</td>
                    </tr>
                    <tr>
                      <td>Furniture And Fixtures</td>
                      <td>{furniture_and_fixtures}</td>
                    </tr>
                    <tr>
                      <td>Advertising / Marketing</td>
                      <td>{advertising_marketing}</td>
                    </tr>
                    <tr>
                      <td>Expected Pay Back Period</td>
                      <td>{expected_pay_back_period}</td>
                    </tr>
                    <tr>
                      <td>
                        The Expected Return On Investment To The Franchisee
                      </td>
                      <td>
                        {the_expected_return_on_investment_to_the_franchisee}
                      </td>
                    </tr>
                    <tr>
                      <td>Any Other Investment Needed</td>
                      <td>{any_other_investment_needed}</td>
                    </tr>
                    <tr>
                      <td>Looking Expansion In Areas</td>
                      <td>{looking_expansion_in_areas}</td>
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
                      <td>{field_assistance_available_for_franchisees}</td>
                    </tr>
                    <tr>
                      <td>Franchise Traning programme:</td>
                      <td>{franchise_traning_programme}</td>
                    </tr>
                    <tr>
                      <td>Detailed Operating Manuals For Franchisees:</td>
                      <td>{detailed_operating_manuals_for_franchisees}</td>
                    </tr>
                    <tr>
                      <td>Need of IT System:</td>
                      <td>{need_of_it_system}</td>
                    </tr>
                    <tr>
                      <td>Assistance From Head Office To Franchisee:</td>
                      <td>{assistance_from_head_office_to_franchisee}</td>
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
                      <td>
                        {required_property_for_this_franchise_opportunity}
                      </td>
                    </tr>
                    <tr>
                      <td>Required Floor Area:</td>
                      <td>{required_floor_area}</td>
                    </tr>
                    <tr>
                      <td>Preferred Location For Unit Franchise:</td>
                      <td>{preferred_location_for_unit_franchise}</td>
                    </tr>
                    <tr>
                      <td>Office Staff Required:</td>
                      <td>{office_staff_required}</td>
                    </tr>
                    <tr>
                      <td>Computer / System :</td>
                      <td>{computer_system}</td>
                    </tr>
                    <tr>
                      <td>Internet Connection :</td>
                      <td>{internet_connection}</td>
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
                        <td>{email}</td>
                      </tr>
                      <tr>
                        <td>Website Url</td>
                        <td>
                          <a
                            href={
                              website_url.startsWith("http://") ||
                              website_url.startsWith("https://")
                                ? website_url
                                : `https://${website_url}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {website_url}
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
                        <td className="w-full">
                          Have standard Franchise Agreement:
                        </td>
                        <td>{have_standard_franchise_agreement}</td>
                      </tr>
                      <tr>
                        <td>Franchise Term:</td>
                        <td>{franchise_term}</td>
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
                <span className="likes">{likes}</span>
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

            <div className="my-4 border p-3">
              <h6 className="text-uppercase text-center">{franchise_name}</h6>
              <h6 className="mb-3 border-bottom border-1 text-uppercase text-center ">
                APPLY FOR FRANCHISE
              </h6>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("fullName", { required: true })}
                  type="text"
                  className="form-control mb-2"
                  placeholder="Full Name"
                />
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="form-control mb-2"
                  placeholder="Email"
                />
                <input
                  {...register("mobile", { required: true })}
                  type="tel"
                  className="form-control mb-2"
                  placeholder="Mobile Number"
                />

                <select {...register("country")} className="form-select mb-2">
                  <option value="India">India</option>
                </select>

                <select
                  {...register("state", { required: true })}
                  className="form-select mb-2"
                >
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Karnataka">Karnataka</option>
                  {/* Add more states as needed */}
                </select>

                <input
                  {...register("city", { required: true })}
                  type="text"
                  className="form-control mb-2"
                  placeholder="City"
                />
                <input
                  {...register("zipcode", { required: true })}
                  type="text"
                  className="form-control mb-2"
                  placeholder="Zipcode"
                />
                <textarea
                  {...register("address", { required: true })}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

// service_ljz4sej
// Connected as praveenvbspu2022@gmail.com
// template_wijgpjk
// _imW-V2n6pid_YxTE
