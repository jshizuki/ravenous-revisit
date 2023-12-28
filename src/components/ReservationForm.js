import React, { useState } from "react";
// To open a pop-up for the ReservationForm
import ReactModal from "react-modal";
// CSS styling
import styles from "../css/ReservationForm.module.css";
// Material UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

ReactModal.setAppElement("#root");

function ReservationForm({ business }) {
  const [reservation, setReservation] = useState({
    name: "",
    bookingDate: "",
    bookingTime: "",
    table: "",
    phoneNumber: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmitValid, setIsSubmitValid] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservation((prev) => {
      return { ...prev, [name]: value };
    });

    const reservationValues = Object.values(reservation);
    const allInputsFilled = reservationValues.every(value => value !== "")
    setIsSubmitValid(allInputsFilled);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You've successfully made a reservation!
    Name: ${reservation.name}
    BookingDate: ${reservation.bookingDate}
    BookingTime: ${reservation.bookingTime}
    Table: ${reservation.table}
    Phone Number: ${reservation.phoneNumber}`);

    // Reset reservation details
    setReservation({});
  };

  const toggleModal = () => {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
  };

  return (
    <div>
      <button onClick={toggleModal}>Make a reservation</button>

      <ReactModal isOpen={modalIsOpen} className={styles.customModal}>
        <div className={styles.reservationInfo}>
          <h2>{business.name}</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <br />
            <TextField
              id="name"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              type="number"
              name="table"
              value={reservation.table || ""}
              variant="outlined"
              size="small"
              sx={{ width: 250, m: 1 }}
              color="success"
              className={styles.reservationTextfield}
            ></TextField>
            <br />
            <label htmlFor="phoneNumber">Phone number:</label>
            <br />
            <TextField
              id="phoneNumber"
              onChange={handleChange}
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
              Make a reservation
            </Button>
          </form>
          <Button
            type="submit"
            onClick={toggleModal}
            variant="contained"
            className={styles.reservationButton}
            sx={{ width: 200, m: 1 }}
          >
            Close
          </Button>
        </div>
      </ReactModal>
    </div>
  );
}

export default ReservationForm;
