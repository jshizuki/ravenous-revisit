import React from "react";
import Business from "./Business";
// CSS styling
import "../css/BusinessList.css";

function BusinessList({ businesses }) {
  return (
    <div className="all-business-card-container">
      {businesses.map((business, index) => {
        return <Business key={business.name + index} business={business} />;
      })}
    </div>
  );
}

export default BusinessList;
