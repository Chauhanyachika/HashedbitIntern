// MovieList.js (Page 1)
import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.css';

import img1 from '../images/img1.webp'; // Make sure the path is correct and there is no extra space

import img2 from '../images/img2.jpeg'; 
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.jpeg';
import img6 from '../images/img6.jpeg';
const movies = [
  { id: 1, title: 'Movie 1', image: img1},
  { id: 2, title: 'Movie 2', image: img2},
  { id: 3, title: 'Movie 3', image: img3},
  { id: 4, title: 'Movie 4', image: img4},
  { id: 5, title: 'Movie 5', image: img5},
  { id: 6, title: 'Movie6',  image:  img6},
];

const Movielist = () => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img src= {movie.image} style={{width:"300px" , padding:"10px",height:"200px", border:"2px solid black"}} alt={movie.title} />
          <h3>{movie.title}</h3>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Movielist;
