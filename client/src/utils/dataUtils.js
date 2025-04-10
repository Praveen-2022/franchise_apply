// utilities/dataUtils.js (optional)
export const getAutomobileFranchises = (data) => {
    return Object.entries(data)
      .filter(([_, item]) => item.category === "Automobiles")
      .map(([id, item]) => ({ id, ...item }));
  };