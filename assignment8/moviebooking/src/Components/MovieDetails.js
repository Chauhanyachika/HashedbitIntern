// MovieDetails.js (Page 2)
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const movieDetails = {
  1: { title: 'Movie 1', description: 'Description for Movie 1' },
  2: { title: 'Movie 2', description: 'Description for Movie 2' },
  3: { title: 'Movie 3', description: 'Description for Movie 3' },
  4: { title: 'Movie 4', description: 'Description for Movie 4' },
  5: { title: 'Movie 5', description: 'Description for Movie 5' },
  6: { title: 'Movie 6', description: 'Description for Movie 6' },
  // Add more details for each movie
};

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movieDetails[id];

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to={`/book-seat/${id}`}>Book Seat</Link>
    </div>
  );
};

export default MovieDetails;
