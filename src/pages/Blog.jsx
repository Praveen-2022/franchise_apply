import React from "react";
import Bottom_Header from "../components/Bottom_Header";
import { FaUser } from "react-icons/fa";
import "../styles/Blog.css";

const Blog = () => {
  return (
    <div>
      <Bottom_Header />
      <h1 className="text-center py-3">Blogs</h1>
      <hr />

      <div className="container">
        <div className="row">
          {/* Add Margin to the Main Content */}
          <div className="col-12 col-lg-9">
            <div className="shadow">
              <img
                src="https://www.franchiseapply.com/admin/uploads/blog/472790.jpeg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="border border-1 border-secondary my-4 row p-3">
              <div className="col-12 col-md-4">
                <img
                  src="https://www.franchiseapply.com/admin/uploads/blog/472790.jpeg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-8">
                <h5>India's Fastest Growing Pre-School - ICON Nurtu...</h5>
                <div className="d-flex align-items-center gap-2 font-color">
                  <h6 className="mb-0 d-flex align-items-center">
                    <FaUser /> By Admin
                  </h6>
                  <p className="mb-0">26-Oct-2024</p>
                </div>
                <button type="button" class="btn btn-outline-danger mt-2">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Add Margin to the Sidebar */}
          <aside className="col-12 col-lg-3">
            <div className="border shadow mx-2">
              <h5 className="aside-heading">RECENT BLOGS</h5>
              <div className=" aside-blog-div">
                <h6 className="mb-0">India's fast growing School</h6>
                <p>by Admin, 26-oct-2024</p>
              </div>
              <div className=" aside-blog-div">
                <h6 className="mb-0">India's fast growing School</h6>
                <p>by Admin, 26-oct-2024</p>
              </div>
              <div className=" aside-blog-div">
                <h6 className="mb-0">India's fast growing School</h6>
                <p>by Admin, 26-oct-2024</p>
              </div>
              <div className=" aside-blog-div">
                <h6 className="mb-0">India's fast growing School</h6>
                <p>by Admin, 26-oct-2024</p>
              </div>
              <div className=" aside-blog-div">
                <h6 className="mb-0">India's fast growing School</h6>
                <p>by Admin, 26-oct-2024</p>
              </div>
            </div>

            <div className="border shadow mx-2">
              <h5 className="aside-heading">TRENDING</h5>
              <div className=" aside-blog-div">
                <h6 className="mb-0">India's fast growing School</h6>
                <p>by Admin, 26-oct-2024</p>
              </div>
              <div className=" aside-blog-div">
                <h6 className="mb-0">India's fast growing School</h6>
                <p>by Admin, 26-oct-2024</p>
              </div>
              <div className=" aside-blog-div">
                <h6 className="mb-0">India's fast growing School</h6>
                <p>by Admin, 26-oct-2024</p>
              </div>
              <div className=" aside-blog-div">
                <h6 className="mb-0">India's fast growing School</h6>
                <p>by Admin, 26-oct-2024</p>
              </div>
              <div className=" aside-blog-div">
                <h6 className="mb-0">India's fast growing School</h6>
                <p>by Admin, 26-oct-2024</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
