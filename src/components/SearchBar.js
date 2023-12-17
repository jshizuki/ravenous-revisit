import React, { useState } from "react";
// CSS styling
import "../css/SearchBar.css";
// Material UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const options = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar() {
  // Set state variables and state
  const [searchOption, setSearchOption] = useState("best_match");
  const [searchGenre, setSearchGenre] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  // Event handlers to capture user's selected sort option, genre and location

  const handleOptionChange = ({ target }) => {
    // Capture the innertext of the <li> element
    const selectedOption = target.innerText;
    setSearchOption(options[selectedOption]);
    // Toggle class of <li> to visually indicate which option has been selected
    const ul = target.parentNode;
    const allLists = ul.querySelectorAll("li")
    // Returns a nodelist
    allLists.forEach(list => {
      if (selectedOption === list.innerText ) {
        list.classList.add("active");
      } else {
        list.classList.remove("active");
      }
    })
  };

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
    // Prevent refreshing page by default after submitting
    event.preventDefault();
    console.log(
      `Searching Ravenous with ${searchOption}, ${searchGenre} and ${searchLocation}`
    );
  };

  return (
    <div className="search-container">
      <ul className="search-options">
        {Object.keys(options).map((option) => {
          return (
            <li onClick={handleOptionChange} key={options[option]}>
              {option}
            </li>
          );
        })}
      </ul>
      <hr className="search-custom-hr" />
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
        <Button
          type="submit"
          variant="contained"
          className="search-button"
          sx={{ width: 120, m: 1 }}
        >
          Let's go
        </Button>
      </form>
    </div>
  );
}

export default SearchBar;
