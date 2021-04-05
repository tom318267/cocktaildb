import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import "./SearchForm.scss";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-container">
          <input
            onChange={searchCocktail}
            type="text"
            id="name"
            ref={searchValue}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
