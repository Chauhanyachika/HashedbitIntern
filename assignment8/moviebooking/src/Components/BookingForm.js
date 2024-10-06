// BookingForm.js (Page 3)
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookingForm = ({ setBookingDetails }) => {
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingDetails({ ...form, bookingId: Math.floor(Math.random() * 100000) });
    navigate(`/confirmation/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: <input type="text" name="name" value={form.name} onChange={handleChange} required /></label>
      <br />
      <label>Email: <input type="email" name="email" value={form.email} onChange={handleChange} required /></label>
      <br />
      <label>Mobile: <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required /></label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
