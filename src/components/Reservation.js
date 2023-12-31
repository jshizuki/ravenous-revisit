import React, { useState } from "react";
import ReservationForm from "./ReservationForm";
// CSS styling
import styles from "../css/Reservation.module.css";
// Material UI
import Button from "@mui/material/Button";

function Reservation({ reservation, updateReservation, deleteReservation }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleFormUpdate = () => {
    setIsEditing(false);
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
      <Button onClick={handleUpdate}>Update</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );

  return (
    <div className={styles.reservationContainer}>
      {isEditing ? (
        <>
          <ReservationForm
            business={reservation.business}
            reservationToUpdate={reservation}
            updateReservation={updateReservation}
            handleFormUpdate={handleFormUpdate}
          />
        </>
      ) : (
        reservationDetails
      )}
    </div>
  );
}

export default Reservation;
