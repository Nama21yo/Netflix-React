import axios from "axios"; // Importing axios library for making HTTP requests

// Creating an instance of axios with base URL for MovieDB API
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance; // Exporting the axios instance
