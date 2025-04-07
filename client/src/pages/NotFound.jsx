import React from "react";
import "../styles/notfound.css";
const NotFound = () => {
  return (
    <div className="container text-center not-found-container">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-3">Oops! The page you're looking for doesn't exist.</p>
      <p className="lead">It might have been moved or deleted.</p>
      <a href="/" className="btn btn-primary">
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
