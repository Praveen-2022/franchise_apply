///////////////////////
import React, { useState } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventCarousel.css";

const EventCarousel = () => {
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

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const prevSlide = () => {
    setIndex(index === 0 ? upcomingEvents.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === upcomingEvents.length - 1 ? 0 : index + 1);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="carousel-container col">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
              controls={false}
            >
              {upcomingEvents.map((event, i) => (
                <Carousel.Item key={event.id}>
                  <div className="justify-content-center row">
                    <div className="text-center col-12 col-md-6">
                      <div className="carousel-item-box">
                        <img
                          src={event.image}
                          alt={event.city}
                          className="event-image"
                        />
                        <h3>{event.city}</h3>
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                        <p>{event.venue}</p>
                      </div>
                    </div>

                    <div className="text-center col-12 col-md-6">
                      <div className="carousel-item-box">
                        <img
                          src={event.image}
                          alt={event.city}
                          className="event-image"
                        />
                        <h3>{event.city}</h3>
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                        <p>{event.venue}</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
            <Row className="justify-content-center mt-3">
              <Col xs="auto">
                <button onClick={prevSlide} className="carousel-btn">
                  <FaArrowLeft />
                </button>
              </Col>
              <Col xs="auto">
                <button onClick={nextSlide} className="carousel-btn">
                  <FaArrowRight />
                </button>
              </Col>
            </Row>
          </div>

          <div className="carousel-container col">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
              controls={false}
            >
              {upcomingEvents.map((event, i) => (
                <Carousel.Item key={event.id}>
                  <div className="justify-content-center row">
                    <div className="text-center col-12 col-md-6">
                      <div className="carousel-item-box">
                        <img
                          src={event.image}
                          alt={event.city}
                          className="event-image"
                        />
                        <h3>{event.city}</h3>
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                        <p>{event.venue}</p>
                      </div>
                    </div>

                    <div className="text-center col-12 col-md-6">
                      <div className="carousel-item-box">
                        <img
                          src={event.image}
                          alt={event.city}
                          className="event-image"
                        />
                        <h3>{event.city}</h3>
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                        <p>{event.venue}</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
            <Row className="justify-content-center mt-3">
              <Col xs="auto">
                <button onClick={prevSlide} className="carousel-btn">
                  <FaArrowLeft />
                </button>
              </Col>
              <Col xs="auto">
                <button onClick={nextSlide} className="carousel-btn">
                  <FaArrowRight />
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCarousel;
