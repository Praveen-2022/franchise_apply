import React from "react";
import Bottom_Header from "../components/Bottom_Header";
import "../styles/videos.css";

const videos = [
  {
    src: "https://www.youtube.com/embed/wyq1QXPfTOk",
    title: "Service Center Franchise",
  },
  {
    src: "https://www.youtube.com/embed/wyq1QXPfTOk",
    title: "Doctor Garage Franchise",
  },
  {
    src: "https://www.youtube.com/embed/wyq1QXPfTOk",
    title: "Bike Dost Franchise",
  },
];

const Videos = () => {
  return (
    <div>
      <Bottom_Header />
      <div>
        <div>
          <h1 className="text-center py-3">VIDEOS</h1>
          <hr />
        </div>
        <div className="container p-0">
          <div className="d-flex align-items-center">
            <div className="franchise-box">
              <h6 className=" mb-0 fw-bold">AUTOMOBILE</h6>
            </div>
            <div className="franchise-lines w-100">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="container my-4">
            <div className="row">
              {videos.map((video, index) => (
                <div className="col-md-4" key={index}>
                  <div className="border video-card">
                    <div className="video-thumbnail">
                      <iframe
                        width="100%"
                        height="200"
                        className="embed-responsive-item"
                        src={video.src}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="card-body">
                      <h6 className="card-title">{video.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
