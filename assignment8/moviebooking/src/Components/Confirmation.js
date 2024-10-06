// Confirmation.js (Page 4)
import React from 'react';
import { useParams } from 'react-router-dom';

const Confirmation = ({ bookingDetails }) => {
  const { id } = useParams();
  const { name, email, mobile, bookingId } = bookingDetails;

  return (
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
      <p>For Movie: {id}</p>
    </div>
  );
};

export default Confirmation;
