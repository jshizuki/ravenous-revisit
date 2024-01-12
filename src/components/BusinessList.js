import React, { useState } from "react";
import Business from "./Business";
// CSS styling
import styles from "../css/BusinessList.module.css";
// Material UI
import Pagination from "@mui/material/Pagination";

function BusinessList({ businesses, addReservation }) {
  const businessesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBusiness = currentPage * businessesPerPage;
  const indexOfFirstBusiness = indexOfLastBusiness - businessesPerPage;
  const currentBusinesses = businesses.slice(
    indexOfFirstBusiness,
    indexOfLastBusiness
  );

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Pagination
        count={Math.ceil(businesses.length / businessesPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        className={styles.pagination}
      />
      <div className={styles.allBusinessCardContainer}>
        {currentBusinesses.map((business, index) => {
          return (
            <Business
              key={business.name + index}
              business={business}
              addReservation={addReservation}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BusinessList;
