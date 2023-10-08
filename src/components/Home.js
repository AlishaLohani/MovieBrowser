// import Hero from "./Hero";

// const Home = () => {
//     return(
//       <>

//       <Hero text="Welcome to Movie Browser"/>
      
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8 offset-lg-2 my-0">
//             <div className="lead">
              
            
//             </div>
//           </div>
//         </div>
//       </div>
      

//       </>
//     )
//   }
//   export default Home;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=51d942c19e209ffe424b1770b55cb235&language=en-US&page=1'
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center bg-dark text-white mb-4 pb-4 pt-4">Welcome to Movie Browser</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col mb-4">
            <Link to={`/movie/${movie.id}`} className="text-decoration-none text-dark">
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top img-fluid rounded"
                />
                <div className="card-body">
                  <p className="card-title">{movie.title}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
