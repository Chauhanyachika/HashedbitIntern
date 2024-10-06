// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movielist from './Components/Movielist';
import MovieDetails from './Components/MovieDetails';
import BookingForm from './Components/BookingForm';
import Confirmation from './Components/Confirmation';

function App() {
  const [bookingDetails, setBookingDetails] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movielist />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book-seat/:id" element={<BookingForm setBookingDetails={setBookingDetails} />} />
        <Route path="/confirmation/:id" element={<Confirmation bookingDetails={bookingDetails} />} />
      </Routes>
    </Router>
  );
}

export default App;
