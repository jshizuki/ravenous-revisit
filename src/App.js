// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import { getBusinesses } from "./utils/yelpApi";
// Import components
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";
// CSS styling
import "./App.css";

function App() {
  const [businesses, setBusinesses] = useState([]);

  const handleSubmit = async (event, genre, location, option) => {
    event.preventDefault();
    const data = await getBusinesses(genre, location, option);
    // console.log(data)
    setBusinesses(data);
    // console.log(businesses);
  }

  return (
    <div className="app-container">
      <h1 className="app-ravenous-title">ravenous</h1>
      <div className="app-banner-image-container">
        <SearchBar handleSubmit={handleSubmit}/>
      </div>
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
