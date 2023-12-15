import React, { useState } from "react";
// CSS styling
import "../css/SearchBar.css";

const options = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar() {
  const [searchOption, setSearchOption] = useState("best_match");
  const [searchGenre, setSearchGenre] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleOptionChange = (event) => {
    const selectedOption = event.target.innerText;
    setSearchOption(options[selectedOption]);
    // Set active style
    const ulContainer = event.target.parentNode;
    const optionsList = ulContainer.querySelectorAll("li");
    optionsList.forEach((option) => {
      if (option.innerText === selectedOption) {
        option.classList.add("active");
      } else {
        option.classList.remove("active");
      }
    });
  };

  const handleGenreChange = (event) => {
    setSearchGenre(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Searching Ravenous with ${searchGenre}, ${searchLocation}, ${searchOption}`
    );
  };

  return (
    <div className="search-container">
      <ul className="search-options">
        {Object.entries(options).map((option) => {
          return (
            <li onClick={handleOptionChange} key={option[0]}>
              {option[0]}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleGenreChange}
          type="text"
          placeholder="Search Businesses"
          value={searchGenre}
        />
        <input
          onChange={handleLocationChange}
          type="text"
          placeholder="Where?"
          value={searchLocation}
        />
        <br />
        <button type="submit">Let's go</button>
      </form>
    </div>
  );
}

export default SearchBar;
