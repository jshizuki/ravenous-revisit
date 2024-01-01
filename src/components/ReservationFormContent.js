import React from "react";
// CSS styling
import styles from "../css/ReservationFormContent.module.css";
// Material UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

/* This component is for rendering the inputs field needed to create or
update reservations, with ReservationForm as its parent component */

function ReservationFormContent({
  business,
  reservation,
  reservationToUpdate,
  handleSubmit,
  handleReservationChange,
  isSubmitValid,
}) {
  return (
    <div className={styles.reservationInfo}>
      <h2>{reservationToUpdate ? business : business.name}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <TextField
          id="name"
          onChange={handleReservationChange}
          name="name"
          value={reservation.name || ""}
          variant="outlined"
          size="small"
          sx={{ width: 250, m: 1 }}
          color="success"
          className={styles.reservationTextfield}
        ></TextField>
        <br />
        <label htmlFor="bookingDate">Booking Date:</label>
        <br />
        <TextField
          id="bookingDate"
          onChange={handleReservationChange}
          type="date"
          name="bookingDate"
          value={reservation.bookingDate || ""}
          variant="outlined"
          size="small"
          sx={{ width: 250, m: 1 }}
          color="success"
          className={styles.reservationTextfield}
          InputProps={{
            inputProps: {
              min: new Date().toISOString().split("T")[0], // Set min to current date
            },
          }}
        ></TextField>
        <br />
        <label htmlFor="bookingTime">Booking Time:</label>
        <br />
        <TextField
          id="bookingTime"
          onChange={handleReservationChange}
          type="time"
          name="bookingTime"
          value={reservation.bookingTime || ""}
          variant="outlined"
          size="small"
          sx={{ width: 250, m: 1 }}
          color="success"
          className={styles.reservationTextfield}
          InputProps={{
            inputProps: {
              min: "11:00",
              max: "22:00",
              step: "900",
            },
          }}
        ></TextField>
        <br />
        <label htmlFor="table">Number of people:</label>
        <br />
        <TextField
          id="table"
          onChange={handleReservationChange}
          type="number"
          name="table"
          value={reservation.table || ""}
          variant="outlined"
          size="small"
          sx={{ width: 250, m: 1 }}
          color="success"
          className={styles.reservationTextfield}
          InputProps={{
            inputProps: {
              min: "1",
              max: "6",
            },
          }}
        ></TextField>
        <br />
        <label htmlFor="phoneNumber">Phone number:</label>
        <br />
        <TextField
          id="phoneNumber"
          onChange={handleReservationChange}
          type="number"
          name="phoneNumber"
          value={reservation.phoneNumber || ""}
          variant="outlined"
          size="small"
          sx={{ width: 250, m: 1 }}
          color="success"
          className={styles.reservationTextfield}
        ></TextField>
        <br />
        <Button
          disabled={!isSubmitValid}
          type="submit"
          variant="contained"
          className={styles.reservationButton}
          sx={{ width: 200, m: 1 }}
        >
          {reservationToUpdate ? "Update" : "Submit"}
        </Button>
      </form>
    </div>
  );
}

export default ReservationFormContent;
