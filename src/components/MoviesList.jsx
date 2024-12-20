import React, { useState } from 'react';  
  
const MoviesList = () => {  
   // Initialize state with a list of movies  
   const [movies, setMovies] = useState([  
      { id: 1, title: 'Movie 1', genre: 'Action', details: 'This is an action movie.' },  
      { id: 2, title: 'Movie 2', genre: 'Comedy', details: 'This is a comedy movie.' },  
      { id: 3, title: 'Movie 3', genre: 'Action', details: 'This is another action movie.' },  
      { id: 4, title: 'Movie 4', genre: 'Drama', details: 'This is a drama movie.' },  
   ]);  
  
   // State to track the view (all movies or specific genre)  
   const [view, setView] = useState('all');  
  
   // Function to remove a movie from the list  
   const removeMovie = (id) => {  
      setMovies(movies.filter((movie) => movie.id !== id));  
   };  
  
   // Function to toggle the view  
   const toggleView = () => {  
      setView(view === 'all' ? 'Action' : 'all');  
   };  
  
   return (  
      <div>  
        {/* Toggle view button */}  
        <button onClick={toggleView}>  
           {view === 'all' ? 'Show Action Movies' : 'Show All Movies'}  
        </button>  
  
        <ul>  
           {/* Map through the movies and display them */}  
           {movies  
              .filter((movie) => (view === 'all' ? true : movie.genre === view))  
              .map((movie) => (  
                <li key={movie.id}>  
                   {/* Toggle details on click */}  
                   <MovieDetails movie={movie} />  
  
                   {/* Remove button */}  
                   <button onClick={() => removeMovie(movie.id)}>Remove</button>  
                </li>  
              ))}  
        </ul>  
      </div>  
   );  
};  
  
// Component to display movie details  
const MovieDetails = ({ movie }) => {  
   const [showDetails, setShowDetails] = useState(false);  
  
   const toggleDetails = () => {  
      setShowDetails(!showDetails);  
   };  
  
   return (  
      <div>  
        <span onClick={toggleDetails}>{movie.title}</span>  
        {showDetails && <p>{movie.details}</p>}  
      </div>  
   );  
};  
  
export default MoviesList;
