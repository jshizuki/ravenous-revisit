import React from "react";
// CSS styling
import styles from "../css/Business.module.css";

function Business({ business }) {
  return (
    <div className={styles.businessCardContainer}>
      <img
        className={styles.businessCardImage}
        src={business.image_url}
        alt={business.name}
      />
      <h3>{business.name}</h3>
      <div className={styles.businessCardInfo}>
        <div className={styles.businessCardInfoLeft}>
          <p>{business["location"]["address1"]}</p>
          <p>{business["location"]["city"]}</p>
          <p>
            {business["location"]["state"]} {business["location"]["zip_code"]}
          </p>
        </div>
        <div className={styles.businessCardInfoRight}>
          <p>{business["categories"][0].title}</p>
          <p>{business.rating}</p>
          <p>{business.review_count} reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;

// console.log(businesses);
// console.log(businesses[1])
// console.log(businesses[1].image_url)
// console.log(businesses[1].name)
// console.log(businesses[1].location["address1"])
// console.log(businesses[1].location["city"])
// console.log(businesses[1].location["state"])
// console.log(businesses[1].location["zip_code"])
// console.log(businesses[1].categories[0].title)
// console.log(businesses[1].rating)
// console.log(businesses[1].review_count)
