import React, { useState } from "react";
// CSS styling
import styles from "../css/SearchBar.module.css";
// Material UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const options = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar({ handleSubmit }) {
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
    const allLists = ul.querySelectorAll("li");
    // Returns a nodelist
    allLists.forEach((list) => {
      if (selectedOption === list.innerText) {
        list.classList.add("active");
      } else {
        list.classList.remove("active");
      }
    });
  };

  const handleGenreChange = ({ target }) => {
    const selectedGenre = target.value;
    setSearchGenre(selectedGenre);
  };

  const handleLocationChange = ({ target }) => {
    const selectedLocation = target.value;
    setSearchLocation(selectedLocation);
  };

  return (
    <div className={styles.searchContainer}>
      <ul className={styles.searchOptions}>
        {Object.keys(options).map((option) => {
          return (
            <li onClick={handleOptionChange} key={options[option]}>
              {option}
            </li>
          );
        })}
      </ul>
      <hr className={styles.searchCustomHr} />
      <form
        onSubmit={(event) =>
          handleSubmit(event, searchGenre, searchLocation, searchOption)
        }
      >
        <TextField
          onChange={handleGenreChange}
          type="text"
          placeholder="Italian"
          value={searchGenre}
          id="outlined-helperText"
          label="Cuisine"
          variant="outlined"
          size="small"
          sx={{ width: 400, m: 1 }}
          className={styles.searchCustomTextfield}
          color="success"
        />
        <TextField
          onChange={handleLocationChange}
          type="text"
          placeholder="Tokyo"
          value={searchLocation}
          id="outlined-helperText"
          label="Location"
          variant="outlined"
          size="small"
          sx={{ width: 400, m: 1 }}
          className={styles.searchCustomTextfield}
          color="success"
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          className={styles.searchButton}
          sx={{ width: 120, m: 1 }}
        >
          Let's go
        </Button>
      </form>
    </div>
  );
}

export default SearchBar;
