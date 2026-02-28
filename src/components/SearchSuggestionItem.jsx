import React from "react";

const SearchSuggestionItem = ({ country, setDisplayValue }) => {
  return (
    <div
      className="search-suggestion-item"
      onMouseEnter={() => setDisplayValue(country)}
    >
      {country}
    </div>
  );
};

export default SearchSuggestionItem;
