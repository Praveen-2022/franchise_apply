import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/videos.css";

const testimonialsList = [
  {
    name: "Jagriti Kumawat",
    role: "Co-Founder (DICEST Education Pvt Ltd)",
    videoUrl: "https://www.youtube.com/embed/xyz123",
  },
  {
    name: "Mr Deepen Barai",
    role: "Director - Speedforce",
    videoUrl: "https://www.youtube.com/embed/abc456",
  },
  {
    name: "Dr. Jitesh Jain",
    role: "Founder & CEO - EDURISHI",
    videoUrl: "https://www.youtube.com/embed/def789",
  },
  {
    name: "John Doe",
    role: "Marketing Head - XYZ Corp",
    videoUrl: "https://www.youtube.com/embed/ghi789",
  },
  {
    name: "Jane Smith",
    role: "CTO - ABC Pvt Ltd",
    videoUrl: "https://www.youtube.com/embed/jkl012",
  },
  {
    name: "Robert Brown",
    role: "CEO - GlobalTech",
    videoUrl: "https://www.youtube.com/embed/mno345",
  },
  {
    name: "Alice Johnson",
    role: "Founder - Startup Inc.",
    videoUrl: "https://www.youtube.com/embed/pqr678",
  },
];

const Videos = () => {
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
    <div className="container mt-5">
      <h2 className="text-center mb-4">CLIENT TESTIMONIALS</h2>

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
                        <span className="rating-badge">⭐⭐⭐⭐⭐</span>
                      </div>
                      <h4 className="mt-3">{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
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

export default Videos;