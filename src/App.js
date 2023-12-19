import React, { useState } from "react";
import { getBusinesses } from "./utils/yelpApi";
// Import components
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";
// CSS styling
import styles from "./App.module.css";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const handleSubmit = async (event, genre, location, option) => {
    event.preventDefault();
    const data = await getBusinesses(genre, location, option);
    // console.log(data)
    setBusinesses(data);
    // console.log(businesses);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.ravenousTitle}>ravenous</h1>
      <div className={styles.bannerImageContainer}>
        <SearchBar handleSubmit={handleSubmit} />
      </div>
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
