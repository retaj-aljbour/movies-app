import MovieCard from "../components/MovieCard";
import { useState } from "react";
import moviesData from "../data/movies";

function Home() {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  let result = [...moviesData];

 
  result = result.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  
  if (sortType === "rating") {
    result.sort((a, b) => b.rating - a.rating);
  }

  if (sortType === "title") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div>
      <h2>Movies List</h2>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <br /><br />

      <button onClick={() => setSortType("rating")}>
        Sort by Rating
      </button>

      <button onClick={() => setSortType("title")}>
        Sort by Title
      </button>

      <button onClick={() => setSortType("")}>
        Reset
      </button>

      <br /><br />

      <div className="movies-container">
        {result.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;