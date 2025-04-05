import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./eventCarousel.css";

const EventCarousel = () => {
  const [index, setIndex] = useState(0);
  const [pastIndex, setPastIndex] = useState(0);

  const upcomingEvents = [
    {
      id: 1,
      city: "Bengaluru",
      date: "2025-03-23",
      time: "9 AM - 6 PM",
      venue: "Hotel THE MONARCH",
      image: "https://franchiseapply.com/admin/uploads/eventsimg/775496.jpg",
    },
    {
      id: 2,
      city: "BHOPAL",
      date: "2025-03-23",
      time: "9 AM - 6 PM",
      venue: "Hotel THE RESIDENCY",
      image: "https://franchiseapply.com/admin/uploads/eventsimg/775496.jpg",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      city: "INDORE",
      date: "2024-06-30",
      time: "9 AM - 6 PM",
      image: "https://franchiseapply.com/admin/uploads/eventsimg/775496.jpg",
    },
    {
      id: 2,
      city: "JAIPUR",
      date: "2024-05-05",
      time: "9 AM - 6 PM",
      venue: "Hotel THE RESIDENCY",
      image: "https://franchiseapply.com/admin/uploads/eventsimg/775496.jpg",
    },
    {
      id: 3,
      city: "LUCKNOW",
      date: "2024-07-28",
      time: "9 AM - 6 PM",
      venue: "Hotel THE RESIDENCY",
      image: "https://franchiseapply.com/admin/uploads/eventsimg/775496.jpg",
    },
  ];

  // Auto-slide for upcoming events every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  // Auto-slide for past events every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextPastSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [pastIndex]);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex < upcomingEvents.length - 2 ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : upcomingEvents.length - 2
    );
  };

  const nextPastSlide = () => {
    setPastIndex((prevIndex) =>
      prevIndex < pastEvents.length - 2 ? prevIndex + 1 : 0
    );
  };

  const prevPastSlide = () => {
    setPastIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pastEvents.length - 2
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {/* Left Div - Upcoming Events */}
          <div className="col py-4 rounded border border-2">
            <div className="header-section">
              <h6 className="carousel-title">
                UPCOMING MULTI-CITY FRANCHISE SHOW
              </h6>
            </div>

            {/* Carousel */}
            <div className="d-flex justify-content-center align-items-center">
              <div className="event-cards">
                {upcomingEvents.slice(index, index + 2).map((event) => (
                  <div key={event.id} className="event-card">
                    <img
                      src={event.image}
                      className="img-fluid rounded"
                      alt={event.city}
                    />
                    <div className="event-info py-2">
                      <h5 className="info-heading">
                        FBO INDIA 2025 - {event.city}
                      </h5>
                      <p className="city-name">{event.city}</p>
                      <p className="event-time">
                        {event.date} - {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="d-flex justify-content-around align-items-center mt-1">
              <button
                className="btn btn-outline-primary mx-2"
                onClick={prevSlide}
              >
                <FaChevronLeft />
              </button>
              <button
                className="btn btn-outline-primary mx-2"
                onClick={nextSlide}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Right Div - Past Events */}
          <div className="col py-4 rounded border border-2">
            <div className="header-section">
              <h6 className="carousel-title">PAST MULTI-CITY FRANCHISE SHOW</h6>
            </div>

            {/* Carousel */}
            <div className="d-flex justify-content-center align-items-center">
              <div className="event-cards">
                {pastEvents.slice(pastIndex, pastIndex + 2).map((event) => (
                  <div key={event.id} className="event-card">
                    <img
                      src={event.image}
                      className="img-fluid rounded"
                      alt={event.city}
                    />
                    <div className="event-info py-2">
                      <h5 className="info-heading">
                        FBO INDIA 2024 - {event.city}
                      </h5>
                      <p className="city-name">{event.city}</p>
                      <p className="event-time">
                        {event.date} - {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="d-flex justify-content-around align-items-center mt-1">
              <button
                className="btn btn-outline-primary mx-2"
                onClick={prevPastSlide}
              >
                <FaChevronLeft />
              </button>
              <button
                className="btn btn-outline-primary mx-2"
                onClick={nextPastSlide}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCarousel;
