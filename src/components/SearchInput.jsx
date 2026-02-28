import React from "react";

const SearchInput = ({
  displayValue,
  handleBlur,
  handleChange,
  handleReset
}) => {
  return (
    <div className="input-container">
      <input
        className="search-input"
        type="text"
        value={displayValue}
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
      {displayValue && (
        <button className="reset-btn" onClick={handleReset}>
          ❌
        </button>
      )}
    </div>
  );
};

export default SearchInput;
