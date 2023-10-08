import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import MovieDetails from './components/MovieDetail';


import { Routes, Route } from 'react-router-dom';


function App() {
 
  const [searchResults, setSearchResults] =useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=51d942c19e209ffe424b1770b55cb235&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])
  


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/search"  element={<SearchView  keyword={searchText} searchResults={searchResults} />} />
          <Route path="/movies/:id" element={<MovieView />} />
          <Route path="/movie/:id" element={<MovieDetails/>} />
      </Routes>
    
    </div>
  );
}

export default App;

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzVhM2NhY2RjMmMyN2QzOTljMzM3MDcwZDFjNzZmMyIsInN1YiI6IjY1MWVlN2E4ZjA0ZDAxMDBmZmVkZTYzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-v3hlzSvTlEqpWfiwVTolij6AhFgjN3shTu3yCP0puM'
//   }
// };

// fetch('https://api.themoviedb.org/3/search/movie?query=7c5a3cacdc2c27d399c337070d1c76f3&include_adult=false&language=en-US&page=11', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));