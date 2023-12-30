import React from "react";
// CSS styling
import styles from "../css/Reservation.module.css";
// Material UI
import Button from "@mui/material/Button";

function Reservation({reservation}) {
  const updateReservation = () => {

  }
  return (
    <div className={styles.reservationContainer}>
      <p><b>Restaurant:</b> {reservation.business}</p>
      <p><b>Name:</b> {reservation.name}</p>
      <p><b>Booking Date:</b> {reservation.bookingDate}</p>
      <p><b>Booking time:</b> {reservation.bookingTime}</p>
      <p><b>Number of people:</b> {reservation.table}</p>
      <p><b>Phone Number:</b> {reservation.phoneNumber}</p>
      <Button onClick={updateReservation}>Update</Button>
    </div>
  );
}

export default Reservation;
