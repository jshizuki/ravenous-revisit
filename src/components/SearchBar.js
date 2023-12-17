import React, { useState } from "react";
// CSS styling
import "../css/SearchBar.css";
// Material UI
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const options = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar() {
  // Set state variables and state
  const [searchOption, setSearchOption] = useState("Best Match");
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

  // Event handlers to capture user's selected sort option, genre and location

  const handleGenreChange = ({ target }) => {
    const selectedGenre = target.value;
    setSearchGenre(selectedGenre);
  };

  const handleLocationChange = ({ target }) => {
    const selectedLocation = target.value;
    setSearchLocation(selectedLocation);
  };

  // Event handler to submit selected sort option, genre and location

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching Ravenous with ${searchGenre} and ${searchLocation}`);
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
      <hr className="search-custom-hr"/>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleGenreChange}
          type="text"
          placeholder="Type in a cuisine - example: Italian"
          value={searchGenre}
          id="outlined-basic"
          variant="outlined"
          size="small"
          sx={{ width: 400, m: 1 }}
          className="search-custom-textfield"
        />
        <TextField
          onChange={handleLocationChange}
          type="text"
          placeholder="Where?"
          value={searchLocation}
          id="outlined-basic"
          variant="outlined"
          size="small"
          sx={{ width: 400, m: 1 }}
          className="search-custom-textfield"
        />
        <br />
        <Button type="submit" variant="contained" className="search-button" sx={{ width: 120, m: 1 }}>Let's go</Button>
      </form>
    </div>
  );
}

export default SearchBar;
