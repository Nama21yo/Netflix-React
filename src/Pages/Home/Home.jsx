import React from "react"; // Importing React library
import Header from "../../Components/Header/Header"; // Importing Header component
import Footer from "../../Components/Footer/Footer"; // Importing Footer component
import Banner from "../../Components/Banner/Banner"; // Importing Banner component
import RowList from "../../Components/Rows/RowList/RowList"; // Importing RowList component

const Home = () => {
  return (
    <>
      {" "}
      {/* Fragment shorthand */}
      <Header /> {/* Header component */}
      <Banner /> {/* Banner component */}
      <RowList /> {/* RowList component */}
      <Footer /> {/* Footer component */}
    </>
  );
};

export default Home;
