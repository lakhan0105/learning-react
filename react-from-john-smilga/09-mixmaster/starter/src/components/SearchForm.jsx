import React from "react";

const SearchForm = ({ searchTerm }) => {
  return (
    <div className="search-form-container">
      <form className="search-form">
        <input
          type="search"
          className="input-text"
          name="search"
          defaultValue={searchTerm}
        />
        <input type="submit" value="search" className="search-btn" />
      </form>
    </div>
  );
};

export default SearchForm;
