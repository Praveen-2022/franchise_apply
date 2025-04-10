import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const YouMakeLike = ({ currentId, category, data }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const relatedFranchises = Object.entries(data).filter(
    ([key, item]) => item.category === category && key !== currentId
  );

  if (!data || !category || !currentId) return null;

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  if (relatedFranchises.length === 0) return null;

  return (
    <div className="mt-5">
      <h4 className="mb-4">You May Also Like</h4>
      <div className="position-relative">
        {/* Arrows */}
        <button
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow"
          onClick={() => scroll("left")}
          style={{ zIndex: 10 }}
        >
          &lt;
        </button>
        <button
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow"
          onClick={() => scroll("right")}
          style={{ zIndex: 10 }}
        >
          &gt;
        </button>

        {/* Card List */}
        <div
          className="d-flex overflow-auto gap-3 px-5"
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {relatedFranchises.map(([key, item]) => (
            <div
              key={key}
              className="card flex-shrink-0"
              style={{ width: "250px", minWidth: "250px" }}
            >
              <div className="p-3 text-center">
                <img
                  src={item.details.logo_image}
                  alt={item.details.franchise_name}
                  style={{ maxHeight: "80px", objectFit: "contain" }}
                  className="img-fluid mb-2"
                />
                <p className="text-muted small mb-1">{item.category}</p>
                <p className="mb-1">
                  <strong>Investment</strong>
                  <br />
                  {item.details.investment_required}
                </p>
                <p className="mb-2">
                  <strong>Space req</strong>
                  <br />
                  {item.details.space_required || "N/A"}
                </p>
                <button
                  className="btn btn-outline-primary btn-sm w-100"
                  onClick={() => navigate(`/explore/${key}`)}
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouMakeLike;
