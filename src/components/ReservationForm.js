import React, { useState } from "react";

function ReservationForm() {
  const [reservation, setReservation] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservation((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(reservation);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You've successfully made a reservation!
    Name: ${reservation.name}
    BookingDate: ${reservation.bookingDate}
    BookingTime: ${reservation.bookingTime}
    Table: ${reservation.table}
    Phone Number: ${reservation.phoneNumber}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <br />
      <input
        id="name"
        name="name"
        value={reservation.name || ""}
        onChange={handleChange}
      ></input>
      <br />
      <label htmlFor="bookingDate">Booking Date:</label>
      <br />
      <input
        id="bookingDate"
        type="date"
        name="bookingDate"
        value={reservation.bookingDate || ""}
        onChange={handleChange}
      ></input>
      <br />
      <label htmlFor="bookingTime">Booking Time:</label>
      <br />
      <input
        id="bookingTime"
        type="time"
        name="bookingTime"
        value={reservation.bookingTime || ""}
        onChange={handleChange}
      ></input>
      <br />
      <label htmlFor="table">Number of people:</label>
      <br />
      <input
        id="table"
        type="number"
        name="table"
        value={reservation.table || ""}
        onChange={handleChange}
      ></input>
      <br />
      <label htmlFor="phoneNumber">Phone number:</label>
      <br />
      <input
        id="phoneNumber"
        type="number"
        name="phoneNumber"
        value={reservation.phoneNumber || ""}
        onChange={handleChange}
      ></input>
      <br />
      <button>Submit reservation</button>
    </form>
  );
}

export default ReservationForm;
