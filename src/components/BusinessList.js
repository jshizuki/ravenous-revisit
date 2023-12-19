import React from "react";
import Business from "./Business";
// CSS styling
import styles from "../css/BusinessList.module.css";

function BusinessList({ businesses }) {
  return (
    <div className={styles.allBusinessCardContainer}>
      {businesses.map((business, index) => {
        return <Business key={business.name + index} business={business} />;
      })}
    </div>
  );
}

export default BusinessList;
