import { useState } from "react";
import PropTypes from 'prop-types';

const Filter = ({ onFilterChange }) => {

  // Event handler to handle dropdown change
  const handleDropdownChange = (event) => {
    onFilterChange(event.target.value);
  };
  
  return (
    <div>
      <select className="select w-full max-w-xs bg-white text-black" onChange={ handleDropdownChange }>
        <option value="All">All</option>
        <option value="Lecture">Lecture Hall</option>
        <option value="Laboratory">PC Laboratory</option>
      </select>
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
