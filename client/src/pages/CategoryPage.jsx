import React from "react";
import { useParams } from "react-router-dom";
import { TestData } from "../constant/TestData";
import FranchiseCard from "../components/FranchiseCard";

const CategoryPage = () => {
  const { name } = useParams();

  const normalize = (str) => str.toLowerCase().replace(/-/g, " ").trim();

  const formattedCategory = normalize(name);

  const filteredData = Object.entries(TestData).filter(([id, franchise]) => {
    return normalize(franchise.category || "") === formattedCategory;
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-capitalize">{name} Franchises</h2>
      <div className="row">
        {filteredData.length > 0 ? (
          filteredData.map(([id, franchise]) => (
            <div key={id} className="col-md-4 col-sm-6 mb-4">
              <FranchiseCard id={id} details={franchise.details} />
            </div>
          ))
        ) : (
          <p>No franchises found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
