// import logo from './logo.svg';
import React from "react";
// Import components
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";
// CSS styling
import "./App.css";

// Banner Image url
const bannerImage =
  "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg";

// Seeding fake restaurant data
const business = {
  imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [];

for (let i = 0; i < 10; i++) {
  businesses.push(business);
}

function App() {
  return (
    <div className="app-container">
      <h1 className="app-ravenous-title">ravenous</h1>
      <div className="app-banner-image-container">
        <SearchBar />
      </div>
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
