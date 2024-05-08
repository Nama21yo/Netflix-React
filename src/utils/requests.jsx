// API key for making requests
const API_KEY = process.env.VITE_REACT_APP_API_KEY;

// Object containing various API requests
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, // Trending movies and TV shows
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, // Netflix Originals
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, // Top rated movies
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, // Action movies
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, // Comedy movies
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, // Horror movies
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, // Documentaries
  fetchTVShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`, // Popular TV shows
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`, // Animation movies
  fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`, // History movies
  fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`, // Science fiction movies
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`, // Adventure movies
};

export default requests; // Exporting the requests object
