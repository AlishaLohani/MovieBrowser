import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=51d942c19e209ffe424b1770b55cb235&language=en-US`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movieDetails) {
    return <p>Error loading movie details.</p>;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, margin: '20px'  }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div style={{ flex: 2 }}>
        <h2 style={{ color: '#333', marginBottom: '10px' }}>{movieDetails.title}</h2>
        <p style={{ color: '#666', marginBottom: '10px' }}>{movieDetails.overview}</p>
        <p style={{ color: '#888', marginBottom: '5px' }}>Release Date: {movieDetails.release_date}</p>
        <p style={{ color: '#888', marginBottom: '5px' }}>
          Genres: {movieDetails.genres.map((genre) => genre.name).join(', ')}
        </p>
        {/* Display other movie details here */}
      </div>
    </div>
  );
};

export default MovieDetails;
