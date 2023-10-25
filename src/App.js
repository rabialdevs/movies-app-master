import React, { useState } from 'react';

// suggest me some movies data?
const moviesData = [
  {
  "title": "The Shawshank Redemption",
  "year": 1994,
  "rating": 9.3,
  "genre": "Drama",
  "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
},

{
  "title": "The Godfather",
  "year": 1972,
  "rating": 9.2,
  "genre": "Crime",
  "plot": "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant youngest son."
},

{
  "title": "The Dark Knight",
  "year": 2008,
  "rating": 9.0,
  "genre": "Action",
  "plot": "A masked vigilante known as Batman, uncovers the corruption in Gotham City while pursuing the Joker, a psychopathic criminal mastermind."
},

{
  "title": "12 Angry Men",
  "year": 1957,
  "rating": 8.9,
  "genre": "Drama",
  "plot": "A jury of twelve men must decide the fate of a young man accused of murder."
}
,
{
  "title": "Pulp Fiction",
  "year": 1994,
  "rating": 8.9,
  "genre": "Crime",
  "plot": "A series of interconnected stories in Los Angeles' underworld."
}
,
{
  "title": "The Good, the Bad and the Ugly",
  "year": 1966,
  "rating": 8.9,
  "genre": "Western",
  "plot": "Three men hunt for a fortune in buried gold during the American Civil War."
}
,
{
  "title": "The Lord of the Rings: The Return of the King",
  "year": 2003,
  "rating": 8.9,
  "genre": "Action",
  "plot": "The final installment in the Lord of the Rings trilogy follows Frodo and Sam as they continue their quest to destroy the One Ring."
}
]

const App = () => {
  
  let [selectedMovie, setSelectedMovie] = useState({});
  console.log(selectedMovie);

  return (

    <div className="movies">
      {moviesData.map((movie,index) => (
        <div onClick={()=>(setSelectedMovie(movie))} className="display-movies">
          <h3>{movie.title}</h3>
          
        </div>
      ))}
      {
        Object.keys(selectedMovie).length > 0 && (
          <div className="selected-movie">
            <h3>{selectedMovie.title}</h3>
            <h4>Rating: {selectedMovie.rating}</h4>
            <h4>Description: {selectedMovie.Applications}</h4>
            </div>
        )
    }

      

    </div>
  );
}






export default App;
