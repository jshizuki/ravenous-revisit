import React, { useState } from "react";
import { getBusinesses } from "./utils/yelpApi";
// Import components
import SearchBar from "./components/SearchBar";
import BusinessList from "./components/BusinessList";
import ReservationList from "./components/ReservationList";
// CSS styling
import styles from "./App.module.css";

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [reservations, setReservations] = useState([]);

  const handleSubmit = async (event, genre, location, option) => {
    event.preventDefault();
    const data = await getBusinesses(genre, location, option);
    // console.log(data)
    setBusinesses(data);
    // console.log(businesses);
  };

  // Add a new reservation to the reservations array
  const addReservation = (newReservation) => {
    setReservations((prev) => [newReservation, ...prev]);
  };

  // const updateReservation = (updatedReservation) => {
  //   setReservations((prev) => {
  //     const index = prev.findIndex(
  //       (reservation) => reservation.id === updatedReservation.id
  //     );
  //     const newReservations = [...prev];
  //     newReservations[index] = updatedReservation;
  //     return newReservations;
  //   });
  // };

  const updateReservation = (updatedReservation) => {
    setReservations((prev) => {
      const index = prev.findIndex(
        (reservation) => reservation.id === updatedReservation.id
      );
      if (index !== -1) {
        const newReservations = [...prev];
        newReservations[index] = updatedReservation;
        return newReservations;
      }
      return prev;
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.ravenousTitle}>ravenous</h1>
      <div className={styles.bannerImageContainer}>
        <SearchBar handleSubmit={handleSubmit} />
      </div>
      <ReservationList
        reservations={reservations}
        updateReservation={updateReservation}
      />
      <BusinessList businesses={businesses} addReservation={addReservation} />
    </div>
  );
}

export default App;
