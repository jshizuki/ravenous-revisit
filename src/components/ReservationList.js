import React, { useState } from "react";
import ReactModal from "react-modal";
// Import components
import Reservation from "./Reservation";
// CSS styling
import styles from "../css/ReservationList.module.css";
// Material UI
import Button from "@mui/material/Button";

ReactModal.setAppElement("#root");

function ReservationList({
  reservations,
  updateReservation,
  deleteReservation,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
  };

  return (
    <div>
      <div onClick={toggleModal} className={styles.reservations}>
        See reservations
      </div>
      <ReactModal isOpen={modalIsOpen} className={styles.customModal}>
        <h3>Reservations</h3>
        <div className={styles.reservationsContainer}>
          {reservations.map((reservation, id) => {
            return (
              <Reservation
                key={reservation + id}
                reservation={reservation}
                updateReservation={updateReservation}
                deleteReservation={deleteReservation}
              />
            );
          })}
        </div>
        <Button onClick={toggleModal}>Close</Button>
      </ReactModal>
    </div>
  );
}

export default ReservationList;
