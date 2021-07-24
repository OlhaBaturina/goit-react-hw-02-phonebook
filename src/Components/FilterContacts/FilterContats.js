import React from "react";
import { v4 as uuidv4 } from "uuid";

const filterIdInput = uuidv4();

const Filter = ({ value, onFilterChange }) => {
  return (
    <div className="Filter">
      <label htmlFor={filterIdInput}>
        <p className="Filter-text">Find contacts by name</p>
        <input
          id={filterIdInput}
          className="Filter-input"
          type="text"
          value={value}
          onChange={({ target: { value } }) => onFilterChange(value)}
        />
      </label>
    </div>
  );
};

export default Filter;
