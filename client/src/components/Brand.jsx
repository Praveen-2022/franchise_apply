import React, { useState, useEffect } from "react";
import "../styles/brand.css";

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

const Brand = () => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const itemsPerSlide = windowWidth < 768 ? 1 : 4;

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
  }, [itemsPerSlide]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const getTranslateValue = () => {
    return `translateX(-${(index * 100) / data.length}%)`;
  };

  return (
    <div className="container mt-5 border border-2 rounded shadow-sm py-2">
      <div className="d-flex align-items-center my-3">
        <div className="franchise-box text-uppercase">New arrivals Brand</div>
        <div className="franchise-lines w-100">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className="carousel-wrapper overflow-hidden position-relative">
        <div
          className="carousel-inner-custom d-flex transition-slide"
          style={{
            transform: getTranslateValue(),
            width: `${(data.length / itemsPerSlide) * 100}%`,
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="custom-card border p-2 rounded"
              style={{ width: `${100 / data.length}%` }}
            >
              <div className="shadow-sm bg-light border rounded inner-box p-3">
                <img src={item.logo} alt={item.name} style={{ width: "150px" }} />
              </div>
              <h6 className="mt-2">{item.name}</h6>
            </div>
          ))}
        </div>
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

export default Brand;
