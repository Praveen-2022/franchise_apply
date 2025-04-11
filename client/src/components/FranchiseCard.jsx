import React, { useState } from "react";
import { TestData } from "../constant/TestData";

const TopFranchise = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  // Helper to parse and convert investment to Lakhs
  const parseInvestment = (invStr) => {
    const cleanStr = invStr.replace(/INR|\₹|,/g, "").toUpperCase();
    const matches = cleanStr.match(/\d+(\.\d+)?\s*[KLCR]+/g);
    if (!matches) return 0;

    const unitMap = { K: 0.001, L: 1, CR: 100 };
    const toLakhs = (val) => {
      const num = parseFloat(val);
      const unit = val.match(/[A-Z]+/)?.[0] || "L";
      return num * (unitMap[unit] || 1);
    };

    return Math.max(...matches.map(toLakhs));
  };

  // Filter top investment franchises
  const topFranchises = Object.entries(TestData)
    .filter(([_, item]) => {
      const invest = item.details.investment_required || "";
      return parseInvestment(invest) >= 20;
    });

  const visibleFranchises = topFranchises.slice(0, visibleCount);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Top Investment Franchises</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {visibleFranchises.map(([id, item]) => (
          <div key={id} className="border p-4 rounded-xl shadow hover:shadow-lg transition bg-white">
            <img
              src={item.details.logo_image}
              alt={item.details.franchise_name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{item.details.franchise_name}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{item.details.description}</p>
            <p className="mt-2 text-sm text-gray-700">
              <strong>Category:</strong> {item.category}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Investment:</strong> {item.details.investment_required}
            </p>
          </div>
        ))}
      </div>

      {visibleCount < topFranchises.length && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setVisibleCount(visibleCount + 10)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default TopFranchise;
