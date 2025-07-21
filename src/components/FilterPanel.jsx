import React from "react";

const FilterPanel = ({ filters, onFilterChange }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <select
        value={filters.category}
        onChange={(e) => onFilterChange("category", e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Clothes">Clothes</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
      </select>

      <select
        value={filters.condition}
        onChange={(e) => onFilterChange("condition", e.target.value)}
      >
        <option value="">All Conditions</option>
        <option value="New">New</option>
        <option value="Like New">Like New</option>
        <option value="Used">Used</option>
      </select>
    </div>
  );
};

export default FilterPanel;
