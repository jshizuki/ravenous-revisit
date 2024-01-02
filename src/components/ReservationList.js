import React from "react";
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
  toggleModal,
  modalIsOpen
}) {
  return (
    <div>
      <ReactModal isOpen={modalIsOpen} className={styles.customModal}>
        <h3>Reservations</h3>
        <div className={styles.reservationsContainer}>
          { reservations.length === 0
            ? "There are no reservations yet"
            : reservations.map((reservation, id) => {
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
