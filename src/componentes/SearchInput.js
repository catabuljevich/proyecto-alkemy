import React, { useState } from "react";

function SearchInput(props) {
  const { handleChange, searchText } = props;

  return (
    <div className="container">
      <input
        id="search-bar"
        type="search"
        placeholder="Buscar superheroes..."
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default SearchInput;
