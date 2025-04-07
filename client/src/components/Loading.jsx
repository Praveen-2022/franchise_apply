import React from "react";
import "../styles/loader.css";

const Loading = () => {
  const text = "Franchise Apply".split("");

  return (
    <div className="franchise-loader-wrapper">
      <div className="franchise-loader-text">
        {text.map((letter, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </div>
      <p className="franchise-subtext">Loading your experience...</p>
    </div>
  );
};

export default Loading;
