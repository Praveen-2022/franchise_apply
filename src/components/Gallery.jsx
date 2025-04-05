import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Gallery.css";

const images = [
  { id: 1, src: "https://www.franchiseapply.com/thefranchiseapply/storage/images/916BEC7D.jpeg", place: "New York" },
  { id: 2, src: "https://www.franchiseapply.com/thefranchiseapply/storage/images/3756E583.jpeg", place: "London" },
  { id: 3, src: "https://www.franchiseapply.com/thefranchiseapply/storage/images/50524FFD.jpeg", place: "Tokyo" },
  { id: 4, src: "https://www.franchiseapply.com/thefranchiseapply/storage/images/9C84D63B.jpeg", place: "Paris" },
  { id: 5, src: "https://www.franchiseapply.com/thefranchiseapply/storage/images/AA4D8AE8.jpeg", place: "New York" },
  { id: 6, src: "https://www.franchiseapply.com/thefranchiseapply/storage/images/916BEC7D.jpeg", place: "London" },
  { id: 7, src: "https://www.franchiseapply.com/thefranchiseapply/storage/images/3756E583.jpeg", place: "Tokyo" },
  { id: 8, src: "https://www.franchiseapply.com/thefranchiseapply/storage/images/50524FFD.jpeg", place: "Paris" }
];

const places = ["All", "New York", "London", "Tokyo", "Paris"];

const Gallery = () => {
  const [selectedPlace, setSelectedPlace] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedPlace === "All"
    ? images
    : images.filter(image => image.place === selectedPlace);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () => setCurrentIndex((currentIndex - 1 + filteredImages.length) % filteredImages.length);
  const nextImage = () => setCurrentIndex((currentIndex + 1) % filteredImages.length);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">GALLERY</h2>
      <div className="mb-3">
        <label className="fw-bold me-2">Place:</label>
        <select
          className="form-select d-inline-block w-auto"
          value={selectedPlace}
          onChange={(e) => setSelectedPlace(e.target.value)}
        >
          {places.map((place, index) => (
            <option key={index} value={place}>{place}</option>
          ))}
        </select>
      </div>
      <div className="row gallery-scroll">
        {filteredImages.map((image, index) => (
          <div key={image.id} className="col-md-4 mb-3">
            <div className="card">
              <img
                src={image.src}
                className="card-img-top cursor-pointer"
                alt={`Gallery ${image.id}`}
                onClick={() => openModal(index)}
              />
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="btn btn-light modal-prev" onClick={prevImage}>&lt;</button>
            <img
              src={filteredImages[currentIndex].src}
              alt="Full View"
              className="img-fluid"
            />
            <button className="btn btn-light modal-next" onClick={nextImage}>&gt;</button>
            <button className="btn btn-danger modal-close" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
