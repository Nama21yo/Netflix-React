import React, { useEffect, useState } from "react"; // Importing React library
import "./row.css"; // Importing styles for the row
import axios from "../../../utils/axios"; // Importing axios for making HTTP requests
import movieTrailer from "movie-trailer"; // Importing movie-trailer for getting movie trailers
import YouTube from "react-youtube"; // Importing YouTube component for embedding videos

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]); // State to hold movie data
  const [trailerUrl, setTrailerUrl] = useState(""); // State to hold trailer URL

  const base_url = "https://image.tmdb.org/t/p/original"; // Base URL for movie images

  useEffect(() => {
    console.log("Fetch URL:", fetchUrl); // Log fetch URL
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl); // Making a GET request
        const fetchedMovies = request.data.results; // Extracting movie data from the response
        console.log("Fetched Movies:", fetchedMovies); // Logging fetched movies
        setMovie(fetchedMovies); // Setting the movie state
      } catch (error) {
        console.log("error", error); // Logging any errors
      }
    };

    fetchData();
  }, [fetchUrl]); // Fetch data when fetchUrl changes

  // Function to handle click on a movie poster
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // Reset trailer URL if already set
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.orginal_name).then(
        (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get("v")); // Log video ID
          setTrailerUrl(urlParams.get("v")); // Set trailer URL
        }
      );
    }
  };

  // Options for the YouTube player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      {" "}
      {/* Container for the row */}
      <h1>{title}</h1> {/* Title of the row */}
      <div className="row_posters">
        {" "}
        {/* Container for movie posters */}
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <img
              onClick={() => handleClick(movie)} // Click handler for movie poster
              key={index}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} // Image source based on size
              alt={movie.name}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`} // Class name for styling
            />
          ))
        ) : (
          <p>No movies available for {title}</p> // Message if no movies are available
        )}
      </div>
      <div style={{ padding: "40px" }}>
        {" "}
        {/* Container for the trailer */}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}{" "}
        {/* Embed the YouTube player if trailer URL is set */}
      </div>
    </div>
  );
};

export default Row;
