import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";

const Search = () => {
  const [search, setSearch] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleBlur = () => {
    setShowSuggestions(false);
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    if (isSearchEmpty(newSearch)) {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
    setSearch(newSearch);
    setDisplayValue(newSearch);
  };

  const handleReset = () => {
    setSearch("");
    setDisplayValue("");
    setShowSuggestions(false);
  };

  const isSearchEmpty = (value) => {
    if (value.trim()) {
      // not empty
      return false;
    } else {
      //is empty
      return true;
    }
  };

  return (
    <div>
      <SearchInput
        displayValue={displayValue}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleReset={handleReset}
      />
      {showSuggestions && (
        <SearchSuggestions search={search} setDisplayValue={setDisplayValue} />
      )}
    </div>
  );
};

export default Search;
