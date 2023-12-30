import React from "react";
import Business from "./Business";
// CSS styling
import styles from "../css/BusinessList.module.css";

function BusinessList({ businesses, addReservation }) {
  return (
    <div className={styles.allBusinessCardContainer}>
      {businesses.map((business, index) => {
        return <Business key={business.name + index} business={business} addReservation={addReservation} />;
      })}
    </div>
  );
}

export default BusinessList;
