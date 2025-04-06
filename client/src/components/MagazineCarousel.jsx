import React, { useState, useEffect } from "react";
import "../styles/magazinecarousel.css";
import { Carousel } from "react-bootstrap";

const magazines = [
  {
    id: 1,
    src: "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/106907.jpg",
    alt: "Franchise Magazine 1",
  },
  {
    id: 2,
    src: "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/393731.jpg",
    alt: "Franchise Magazine 2",
  },
  {
    id: 3,
    src: "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/360953.jpg",
    alt: "Franchise Magazine 3",
  },
  {
    id: 4,
    src: "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/949341.jpg",
    alt: "Franchise Magazine 4",
  },
  {
    id: 5,
    src: "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/323468.jpg",
    alt: "Franchise Magazine 5",
  },
  {
    id: 6,
    src: "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/793927.jpg",
    alt: "Franchise Magazine 6",
  },
  {
    id: 7,
    src: "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/330939.jpg",
    alt: "Franchise Magazine 7",
  },
  {
    id: 8,
    src: "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/255550.jpg",
    alt: "Franchise Magazine 8",
  },
  {
    id: 9,
    src: "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/839866.jpg",
    alt: "Franchise Magazine 9",
  },
  {
    id: 10,
    src: "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/810590.jpg",
    alt: "Franchise Magazine 10",
  },
  {
    id: 11,
    src: "https://www.franchiseapply.com/admin/uploads/slider/fmagazine/246384.jpg",
    alt: "Franchise Magazine 11",
  },
];

const MagazineCarousel = () => {
  const [index, setIndex] = useState(0);
  const itemsPerSlide =
    window.innerWidth < 576 ? 1 : window.innerWidth < 768 ? 2 : 4;

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(
        (prevIndex) =>
          (prevIndex + 1) % (magazines.length - (itemsPerSlide - 1))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [itemsPerSlide]);

  return (
    <>
      {/* // done */}
      <div className="container">
        <h2 className="text-center text-uppercase my-4" style={{ color: "#6f6f6f" }}>
          Franchise Magazine
        </h2>

        <Carousel
          activeIndex={index}
          onSelect={setIndex}
          indicators={true}
          controls={false}
          interval={null}
        >
          {magazines.map(
            (_, i) =>
              i <= magazines.length - itemsPerSlide && (
                <Carousel.Item key={i}>
                  <div className="row justify-content-center">
                    {magazines.slice(i, i + itemsPerSlide).map((mag) => (
                      <div key={mag.id} className="col-12 col-sm-6 col-md-3 p-2">
                        <img
                          className="img-fluid"
                          src={mag.src}
                          alt={mag.alt}
                        />
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              )
          )}
        </Carousel>
      </div>
    </>
  );
};

export default MagazineCarousel;
