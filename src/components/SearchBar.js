import React from "react";
// CSS styling
import "../css/SearchBar.css";

const searchOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar() {
  return (
    <div>
      <ul className="search-options">
        {Object.entries(searchOptions).map((option) => {
          return <li>{option[0]}</li>;
        })}
      </ul>
      <form>
        <input type="text" placeholder="Search Businesses" />
        <input type="text" placeholder="Where?" />
        <br />
        <button type="submit">Let's go</button>
      </form>
    </div>
  );
}

export default SearchBar;
