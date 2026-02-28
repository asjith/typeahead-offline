import React from "react";
import { COUNTRIES } from "../utils/constants";
import SearchSuggestionItem from "./SearchSuggestionItem";

const SearchSuggestions = ({ search, setDisplayValue }) => {
  const filteredCountries = COUNTRIES.filter((country) => {
    if (country.toLowerCase().includes(search.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  if (filteredCountries.length === 0) return;

  return (
    <div className="search-suggestions">
      {filteredCountries.map((country) => {
        return (
          <SearchSuggestionItem
            key={country}
            country={country}
            setDisplayValue={setDisplayValue}
          />
        );
      })}
    </div>
  );
};

export default SearchSuggestions;
