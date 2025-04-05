import React, { useState,useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/magazine.css";

const data = [
  {
    id: 1,
    logo: "https://franchiseapply.com/admin/uploads/brand_registration/1743067241_2.png",
    name: "Shreeji",
    investment: "INR 50K",
    space: "100 Sq Ft",
  },
  {
    id: 2,
    logo: "https://franchiseapply.com/admin/uploads/brand_registration/1743067241_2.png",
    name: "Brandwala",
    investment: "20 Lacs - 22 Lacs",
    space: "1000 - 1500 Sq Ft",
  },
  {
    id: 3,
    logo: "https://franchiseapply.com/admin/uploads/brand_registration/1743067241_2.png",
    name: "UNITED18",
    investment: "INR 10 L + GST",
    space: "500 - 2000 Sq Ft",
  },
  {
    id: 4,
    logo: "https://franchiseapply.com/admin/uploads/brand_registration/1743067241_2.png",
    name: "Kayara India",
    investment: "25 Lacs - 80 Lacs",
    space: "500 - 2500 Sq Ft",
  },
  {
    id: 5,
    logo: "https://franchiseapply.com/admin/uploads/brand_registration/1743067241_2.png",
    name: "Business X",
    investment: "15 Lacs - 30 Lacs",
    space: "800 - 1600 Sq Ft",
  },
];

const BuyMagazine = () => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const itemsPerSlide = windowWidth < 768 ? 1 : 4;

  const getVisibleItems = () => {
    return data
      .slice(index, index + itemsPerSlide)
      .concat(
        index + itemsPerSlide > data.length
          ? data.slice(0, index + itemsPerSlide - data.length)
          : []
      );
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">You May Also Like</h2>
      <div className="row d-flex justify-content-center">
        {getVisibleItems().map((item) => (
          <div
            key={item.id}
            className={`col-${itemsPerSlide === 1 ? "12" : "md-3"}`}
          >
            <div className=" text-center p-4 shadow-sm">
              <img
                src={item.logo}
                alt={item.name}
                className="mb-3"
                style={{ width: "150px" }}
              />
              <h5>{item.name}</h5>
              <p>
                <strong>Investment:</strong> {item.investment}
              </p>
              <p>
                <strong>Space Req:</strong> {item.space}
              </p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-secondary me-2" onClick={handlePrev}>
          &lt;
        </button>
        <button className="btn btn-secondary" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BuyMagazine;
