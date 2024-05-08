import React, { useEffect, useState } from "react";
import axios from "../../utils/axios"; // Importing axios for making HTTP requests
import requests from "../../utils/requests"; // Importing requests for API endpoints
import "./Banner.css"; // Importing styles for the banner

const Banner = () => {
  const [movie, setMovie] = useState({}); // State to hold the movie data

  useEffect(() => {
    // Fetching a random movie from Netflix originals on component mount
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOrginals); // Making a GET request
        console.log(request); // Logging the request data to the console
        // Setting a random movie from the response data to the state
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error); // Logging any errors to the console
      }
    })();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to truncate the movie overview to a specified length
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        // Setting the background image of the banner
        backgroundSize: "cover", // Cover the entire element with the background image
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundRepeat: "no-repeat", // Preventing background image from repeating
      }}
    >
      <div className="banner_contents">
        {/* Displaying the movie title or name */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.orginal_name}
        </h1>
        <div className="banner_buttons">
          {/* Button to play the movie */}
          <button className="banner_button play">Play</button>
          {/* Button to add the movie to "My List" */}
          <button className="banner_button">My List</button>
        </div>
        {/* Displaying the truncated movie overview */}
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
