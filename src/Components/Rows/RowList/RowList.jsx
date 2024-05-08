import React from "react"; // Importing React library
import Row from "../Row/Row"; // Importing Row component
import requests from "../../../utils/requests"; // Importing request URLs

const RowList = () => {
  return (
    <>
      {" "}
      {/* Fragment shorthand */}
      <Row
        title="NEFLIX ORGINALS" // Title for Netflix Originals
        fetchUrl={requests.fetchNetflixOrginals} // Fetch URL for Netflix Originals
        isLargeRow={true} // Flag for large row
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />{" "}
      {/* Trending movies */}
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />{" "}
      {/* Top rated movies */}
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />{" "}
      {/* Action movies */}
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />{" "}
      {/* Comedy movies */}
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />{" "}
      {/* Horror movies */}
      {/* Additional genres */}
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />{" "}
      {/* Animation movies */}
      <Row
        title="Science Fiction Movies"
        fetchUrl={requests.fetchScienceFiction}
      />{" "}
      {/* Sci-Fi movies */}
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventure} />{" "}
      {/* Adventure movies */}
      <Row title="History Movies" fetchUrl={requests.fetchHistory} />{" "}
      {/* History movies */}
      {/* Additional categories */}
      <Row title="TV Shows" fetchUrl={requests.fetchTVShow} /> {/* TV Shows */}
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />{" "}
      {/* Documentaries */}
    </>
  );
};

export default RowList;
