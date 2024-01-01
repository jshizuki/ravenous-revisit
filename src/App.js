import React, { useState } from "react";
import { getBusinesses } from "./utils/yelpApi";
import { generateId } from "./utils/helpers";
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
    // API call
    const businessData = await getBusinesses(genre, location, option);
    setBusinesses(businessData);
  };

  // Add a new reservation to the reservations array
  const addReservation = (newReservation) => {
    const reservationWithId = { ...newReservation, id: generateId() };
    setReservations((prev) => [reservationWithId, ...prev]);
  };

  // Replace the existing reservation with the updated reservation
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

  const deleteReservation = (reservationId) => {
    setReservations((prev) => {
      const updatedReservations = prev.filter(
        (reservation) => reservation.id !== reservationId
      );
      return updatedReservations;
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
        deleteReservation={deleteReservation}
      />
      <BusinessList businesses={businesses} addReservation={addReservation} />
    </div>
  );
}

export default App;
