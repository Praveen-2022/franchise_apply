import React from "react";
import "../styles/automobiles.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
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

const Automobiles = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-4 franchise-section">
            <p className="text-center">Top Franchise Opportunity</p>
            <p className="text-center fw-bold" style={{ color: "#1abc9c" }}>
              OPPORTUNITIES
            </p>
            <Link className="dc-btn">Explore All</Link>
          </div>
          <div className="col-12 col-md-4 franchise-section">
            <p className="text-center">Top Premium Franchise</p>
            <p className="text-center fw-bold" style={{ color: "#3fabf3" }}>
              OPPORTUNITIES
            </p>
            <Link className="dc-btn" style={{ borderColor: "#3fabf3" }}>
              Explore All
            </Link>
          </div>
          <div className="col-12 col-md-4 franchise-section">
            <p className="text-center">Master Franchise</p>
            <p className="text-center fw-bold" style={{ color: "#9b59b6" }}>
              OPPORTUNITIES
            </p>
            <Link
              to="/master-franchise"
              className="dc-btn"
              style={{ borderColor: "#9b59b6" }}
            >
              Explore All
            </Link>
          </div>
        </div>
      </div>

      <div className="container p-2 border">
        <div className="carousel-container">
          <Carousel
            interval={3000}
            controls={true}
            indicators={false}
            pause={false}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://franchiseapply.com/admin/uploads/brand_registration/1620017431_3.png"
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://franchiseapply.com/admin/uploads/brand_registration/1639628365_3.jpg"
                alt="Slide 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://franchiseapply.com/admin/uploads/brand_registration/1639213702_3.jpg"
                alt="Slide 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          <aside className="col-12 col-md-3 p-0 shadow-sm aside-bar">
            <ul>
              <li>
                <Link to="/automobiles">
                  <FaCar /> Automobiles
                </Link>
              </li>
              <li>
                <Link to="/beauty-and-salon">
                  <MdFaceRetouchingNatural /> Beauty and Salon
                </Link>
              </li>
              <li>
                <Link to="/business-servicess">
                  <FaTools /> Business Services
                </Link>
              </li>
              <li>
                <Link to="/dealers-and-distributers">
                  <FaTruck /> Dealers and Distributors
                </Link>
              </li>
              <li>
                <Link to="/education">
                  <FcReading /> Education
                </Link>
              </li>
              <li>
                <Link to="/health-and-wellness">
                  <BsHeartPulse /> Health and Wellness
                </Link>
              </li>
              <li>
                <Link to="/food-and-beverage">
                  <ImSpoonKnife /> Food and Beverage
                </Link>
              </li>
              <li>
                <Link to="/retail">
                  <SiHomeassistantcommunitystore /> Retail
                </Link>
              </li>
              <li>
                <Link to="/courier-logistics">
                  <FaBuildingWheat /> Courier Logistics
                </Link>
              </li>
              <li>
                <Link to="/power-and-energy">
                  <GiAtomicSlashes /> Power and Energy
                </Link>
              </li>
              <li>
                <Link to="/electronics">
                  <MdPhonelink /> Electronics
                </Link>
              </li>
            </ul>
          </aside>
          <div className="col-12 col-md-9">
            <div className="border rounded px-3 py-2 description-section overflow-y-scroll">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
                commodi totam ipsa eveniet architecto soluta. Dolorem quidem
                aperiam reprehenderit inventore expedita ea rerum numquam
                dignissimos vel temporibus excepturi facilis obcaecati ullam
                molestias, unde itaque culpa, id ratione, officiis hic
                laboriosam? Sed corporis, reprehenderit ad nulla deleniti quia
                qui, ducimus eum obcaecati corrupti autem molestias culpa
                dolores laudantium, reiciendis quis? Officia sit sed voluptatum,
                molestiae hic, quisquam sequi veritatis corrupti consequatur
                eius et ipsam praesentium vitae nesciunt blanditiis
                reprehenderit inventore impedit sunt? Qui dolores laboriosam
                corrupti autem veritatis temporibus eos eligendi earum quasi
                fugit alias incidunt unde itaque eius nisi sint, facere
                accusamus velit ad? Qui officia hic facilis saepe quidem modi
                beatae repellat exercitationem? Reiciendis quisquam error a
                ipsam. Accusantium perspiciatis dolore unde ea, beatae cum
                laborum ipsum veniam ad illum tenetur, eum aspernatur quaerat
                rerum? Dolores cupiditate totam reiciendis ducimus voluptas
                alias nihil aut ipsum expedita, maxime asperiores eveniet
                deleniti molestias eum mollitia in amet ad assumenda pariatur
                soluta? Ab quisquam, a id eos, architecto iusto excepturi minima
                itaque vitae sapiente ipsum nam, doloribus et ullam sunt omnis
                saepe dolor nobis quasi. Aspernatur officia repellat a earum,
                vero reprehenderit alias quam, temporibus consequatur, tempore
                facilis quas quo sunt laborum! Alias quos accusamus voluptatem
                nesciunt odio minus. Totam exercitationem aspernatur magnam
                reprehenderit et officiis illum, nihil sapiente corrupti, vero
                harum quibusdam dolores. Cumque unde accusantium consequuntur
                voluptates similique mollitia amet, esse est praesentium sit
                error, tempora vel officia vitae excepturi delectus nobis rerum
                eaque atque pariatur omnis iste quia numquam sequi. Animi iste
                ad eaque, ipsum impedit ipsam? Neque et nemo laudantium culpa,
                quisquam tempore ratione, eaque facere eos dolorem, itaque at
                suscipit! Unde esse aspernatur aliquid soluta voluptatem,
                pariatur in exercitationem enim. Quibusdam, nemo aliquam dolores
                assumenda suscipit reiciendis officia, delectus asperiores
                deserunt laboriosam pariatur? Optio sed quia praesentium,
                doloremque nihil exercitationem ipsa excepturi sunt ullam?
                Cumque, assumenda similique. Provident nemo, nobis consequuntur
                quod quis eius vitae! Praesentium voluptatem magni architecto
                dolor error repellat necessitatibus animi quo delectus sed
                consequatur ipsam tempora aperiam pariatur mollitia cumque fuga
                quod dolorem iusto esse, libero ipsa similique? Delectus,
                aliquid! Quo veniam cupiditate aut explicabo, provident non
                officia quae illum eos? Recusandae sequi, odio velit ex
                temporibus, ducimus officiis voluptates illum, aperiam soluta
                vitae culpa ullam deserunt facere mollitia debitis corporis eius
                tenetur accusamus. Vel aperiam repellendus sapiente voluptas
                deserunt! Quod hic quasi sapiente deserunt itaque, facilis quo
                excepturi cupiditate doloremque voluptatibus, quisquam, sit
                minus laudantium beatae accusantium numquam tempore ratione.
                Minus amet autem at deserunt odit repellat voluptates rerum, et,
                nostrum rem corporis illo, id consequuntur! Cumque rem odit
                excepturi voluptate doloremque. Rerum, quod. Vel dolores aperiam
                consequatur quis laboriosam, quo aliquid voluptate omnis
                accusantium! Quis, maiores dolorem. Hic quo aliquam, ipsa
                explicabo iusto illum asperiores ex quasi, est laborum eveniet
                ullam temporibus obcaecati cum, consectetur tempore? Recusandae
                natus excepturi vero? Maxime cupiditate architecto tenetur
                dolorem sunt eum asperiores incidunt error fugit. Architecto
                inventore accusantium laborum esse id quia autem, aliquam
                consectetur delectus at dicta minima. Corrupti qui nihil
                necessitatibus expedita quam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="text-center text-uppercase">Automobiles</h3>
      </div>
      <div className="container">
        <div className="row gx-3">
          <div className="col-12 col-md-3">
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
                  Quick Auto Service - Two Wheeler Multi Brand Service Centre
                </p>
                <div className="d-flex justify-content-between py-1 align-items-center">
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    Investment
                  </p>
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    4 Lacs - 6 lacs
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center py-1">
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    Space req
                  </p>
                  <p
                    className="mb-0 fw-bold"
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
          <div className="col-12 col-md-3">
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
                  Quick Auto Service - Two Wheeler Multi Brand Service Centre
                </p>
                <div className="d-flex justify-content-between py-1 align-items-center">
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    Investment
                  </p>
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    4 Lacs - 6 lacs
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center py-1">
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    Space req
                  </p>
                  <p
                    className="mb-0 fw-bold"
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
          <div className="col-12 col-md-3">
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
                  Quick Auto Service - Two Wheeler Multi Brand Service Centre
                </p>
                <div className="d-flex justify-content-between py-1 align-items-center">
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    Investment
                  </p>
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    4 Lacs - 6 lacs
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center py-1">
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    Space req
                  </p>
                  <p
                    className="mb-0 fw-bold"
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
          <div className="col-12 col-md-3">
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
                  Quick Auto Service - Two Wheeler Multi Brand Service Centre
                </p>
                <div className="d-flex justify-content-between py-1 align-items-center">
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    Investment
                  </p>
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    4 Lacs - 6 lacs
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center py-1">
                  <p
                    className="mb-0 fw-bold"
                    style={{ fontSize: "14px", color: "#6f6f6f" }}
                  >
                    Space req
                  </p>
                  <p
                    className="mb-0 fw-bold"
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
    </>
  );
};

export default Automobiles;