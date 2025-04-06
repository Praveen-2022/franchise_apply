import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import "../styles/testimonials.css";

const testimonialsList = [
  {
    name: "Jagriti Kumawat",
    role: "Co-Founder (DICEST Education Pvt Ltd)",
    videoUrl: "https://www.youtube.com/embed/44ll1dAH-w4?si=nFoMi40pxLL1zonI",
  },
  {
    name: "Mr Deepen Barai",
    role: "Director - Speedforce",
    videoUrl: "https://www.youtube.com/embed/44ll1dAH-w4?si=nFoMi40pxLL1zonI",
  },
  {
    name: "Dr. Jitesh Jain",
    role: "Founder & CEO - EDURISHI",
    videoUrl: "https://www.youtube.com/embed/44ll1dAH-w4?si=nFoMi40pxLL1zonI",
  },
  {
    name: "John Doe",
    role: "Marketing Head - XYZ Corp",
    videoUrl: "https://www.youtube.com/embed/44ll1dAH-w4?si=nFoMi40pxLL1zonI",
  },
  {
    name: "Jane Smith",
    role: "CTO - ABC Pvt Ltd",
    videoUrl: "https://www.youtube.com/embed/44ll1dAH-w4?si=nFoMi40pxLL1zonI",
  },
  {
    name: "Robert Brown",
    role: "CEO - GlobalTech",
    videoUrl: "https://www.youtube.com/embed/44ll1dAH-w4?si=nFoMi40pxLL1zonI",
  },
  {
    name: "Alice Johnson",
    role: "Founder - Startup Inc.",
    videoUrl: "https://www.youtube.com/embed/44ll1dAH-w4?si=nFoMi40pxLL1zonI",
  },
];

const Testimonials = () => {
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Responsive adjustments
  useEffect(() => {
    const updateCardsPerSlide = () => {
      setCardsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };
    window.addEventListener("resize", updateCardsPerSlide);
    updateCardsPerSlide();
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  // Calculate number of slides
  const totalSlides = Math.ceil(testimonialsList.length / cardsPerSlide);

  return (
    <div className="container my-5">
      <h2 className="text-center my-4 text-uppercase" style={{ color: "#6f6f6f" }}>
        CLIENT TESTIMONIALS
      </h2>

      <Carousel indicators={true} controls={false} interval={3000}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Carousel.Item key={index}>
            <div className="row justify-content-center">
              {testimonialsList
                .slice(index * cardsPerSlide, (index + 1) * cardsPerSlide)
                .map((testimonial, idx) => (
                  <div key={idx} className="col-md-4 col-sm-12">
                    <div className="testimonial-card">
                      <div className="video-wrapper">
                        <iframe
                          width="100%"
                          height="250"
                          src={testimonial.videoUrl}
                          title="YouTube video"
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="text-center">
                        <h5 className="">Brijesh Patel</h5>
                        <p>Founder & Director - Doctor Garage</p>
                        <div className="">
                          {[...Array(5)].map((_, idx) => (
                            <FaStar key={idx} className="m-1 stars" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
