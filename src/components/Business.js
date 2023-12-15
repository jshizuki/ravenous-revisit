import React from "react";
// CSS styling
import "../css/Business.css";

// const business = {
//   imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
//   name: "MarginOtto Pizzeria",
//   address: "1010 Paddington Way",
//   city: "Flavortown",
//   state: "NY",
//   zipCode: "10101",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90,
// };

function Business({ business }) {
  return (
    <div className="business-card-container">
      <img
        className="business-card-image"
        src={business.imageSrc}
        alt={business.name}
      />
      <h2>{business.name}</h2>
      <div className="business-card-info">
        <div className="business-card-info-left">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>
            {business.state} {business.zipCode}
          </p>
        </div>
        <div className="business-card-info-right">
          <p>{business.category}</p>
          <p>{business.rating}</p>
          <p>{business.reviewCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
