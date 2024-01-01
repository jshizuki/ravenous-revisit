import React, { useState } from "react";
import ReservationForm from "./ReservationForm";
// CSS styling
import styles from "../css/Reservation.module.css";
// Material UI
import Button from "@mui/material/Button";

/* This component is for rendering:
- reservation details; or
- updating or deleting a reservation */

function Reservation({ reservation, updateReservation, deleteReservation }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleReservationUpdate = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  const handleDelete = () => {
    alert("Are you sure?  This cannot be undone.")
    deleteReservation(reservation.id);
  }

  const reservationDetails = (
    <div>
      <b>Restaurant:</b> {reservation.business}<br />
      <b>Name:</b> {reservation.name}<br />
      <b>Booking Date:</b> {reservation.bookingDate}<br />
      <b>Booking time:</b> {reservation.bookingTime}<br />
      <b>Number of people:</b> {reservation.table}<br />
      <b>Phone Number:</b> {reservation.phoneNumber}<br />
      <Button onClick={handleReservationUpdate}>Update</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );

  return (
    <div className={styles.reservationContainer}>
      {isEditing ? (
        <>
          <ReservationForm
            reservationToUpdate={reservation}
            updateReservation={updateReservation}
            handleReservationUpdate={handleReservationUpdate}
          />
        </>
      ) : (
        reservationDetails
      )}
    </div>
  );
}

export default Reservation;
