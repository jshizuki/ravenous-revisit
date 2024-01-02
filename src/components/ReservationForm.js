import React, { useState, useEffect } from "react";
import { initialReservationState } from "../utils/helpers";
import ReservationFormContent from "./ReservationFormContent";
// Pop-up effect for the ReservationForm component
import ReactModal from "react-modal";
// CSS styling
import styles from "../css/ReservationForm.module.css";
// Material UI
import Button from "@mui/material/Button";

ReactModal.setAppElement("#root");

/* This component is rendered:
- inside a ReactModal popup (when creating new reservations)
- inside the Reservation Component that's already a popup (when updating reservations) */

function ReservationForm({
  business,
  addReservation,
  reservationToUpdate,
  updateReservation,
  handleReservationUpdate,
}) {
  const [reservation, setReservation] = useState(initialReservationState);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmitValid, setIsSubmitValid] = useState(false);

  useEffect(() => {
    if (reservationToUpdate) {
      setReservation(reservationToUpdate);
    }
  }, [reservationToUpdate]);

  // Tracks and stores what the user has typed
  const handleReservationChange = (event) => {
    const { name, value } = event.target;

    if (reservationToUpdate) {
      setReservation((prev) => {
        return {
          ...prev,
          [name]: value,
          business: reservationToUpdate.business,
        };
      });
    } else {
      setReservation((prev) => {
        return { ...prev, [name]: value, business: business.name };
      });
    }
  };

  // Disables submit button until all inputs are filled
  useEffect(() => {
    const reservationValues = Object.values(reservation);
    const allInputsFilled = reservationValues.every((value) => value !== "");
    setIsSubmitValid(allInputsFilled);
  }, [reservation]);

  // Shows the reservation has been confirmed
  const handleSubmit = (event) => {
    event.preventDefault();

    if (reservationToUpdate) {
      updateReservation(reservation);
      alert("Reservation updated successfully!");
      handleReservationUpdate();
    } else {
      addReservation(reservation);
      alert("Reservation added successfully!");
      toggleModal();
    }

    setReservation(initialReservationState);
  };

  const toggleModal = () => {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
  };

  const reservationFormContent = (
    <ReservationFormContent
      reservation={reservation}
      reservationToUpdate={reservationToUpdate}
      handleSubmit={handleSubmit}
      handleReservationChange={handleReservationChange}
      business={business}
      isSubmitValid={isSubmitValid}
    />
  );

  if (reservationToUpdate) {
    return reservationFormContent;
  } else {
    return (
      <>
        <Button
          variant="outlined"
          onClick={toggleModal}
          sx={{ m: 2 }}
        >
          Make a reservation
        </Button>
        <ReactModal isOpen={modalIsOpen} className={styles.customModal}>
          {reservationFormContent}
          <Button
            type="submit"
            onClick={toggleModal}
            variant="contained"
            className={styles.reservationButton}
            sx={{ width: 200, m: 1 }}
          >
            Close
          </Button>
        </ReactModal>
      </>
    );
  }
}

export default ReservationForm;
