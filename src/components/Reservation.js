import React, { useState } from "react";
import ReservationForm from "./ReservationForm";
// CSS styling
// import styles from "../css/Reservation.module.css";
// Material UI
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

/* This component is for rendering:
- reservation details; or
- updating or deleting a reservation */

function Reservation({ reservation, updateReservation, deleteReservation }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleReservationUpdate = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  };

  const handleDelete = () => {
    alert("Are you sure?  This cannot be undone.");
    deleteReservation(reservation.id);
  };

  const reservationDetails = (
    <div>
      <p>
        <b>Restaurant:</b> {reservation.business}
      </p>
      <p>
        <b>Name:</b> {reservation.name}
      </p>
      <p>
        <b>Booking Date:</b> {reservation.bookingDate}
      </p>
      <p>
        <b>Booking time:</b> {reservation.bookingTime}
      </p>
      <p>
        <b>Number of people:</b> {reservation.table}
      </p>
      <p>
        <b>Phone Number:</b> {reservation.phoneNumber}
      </p>
      <Button onClick={handleReservationUpdate} sx={{ p: 0 }}>
        Update
      </Button>
      <Button onClick={handleDelete} sx={{ p: 0 }}>
        Delete
      </Button>
    </div>
  );

  return (
    <Card sx={{ m: 1, minWidth: 350, minHeight: 250 }}>
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
    </Card>
  );
}

export default Reservation;
