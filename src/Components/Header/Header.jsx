import React from "react"; // Importing React library
import "./Header.css"; // Importing styles for the header
import NetfixLogo from "../../assets/images/10011.png"; // Importing Netflix logo image
import SearchIcon from "@mui/icons-material/Search"; // Importing search icon
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"; // Importing notifications icon
import AccountBoxIcon from "@mui/icons-material/AccountBox"; // Importing account icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Importing dropdown icon

const Header = () => {
  return (
    <div className="header_outer_container">
      {" "}
      {/* Outer container for the header */}
      <div className="header_container">
        {" "}
        {/* Container for the header content */}
        <div className="header_left">
          {" "}
          {/* Left side of the header */}
          <ul>
            <li>
              <img src={NetfixLogo} alt="Netflix-Logo" width="100" />{" "}
              {/* Netflix logo */}
            </li>
            <li>Netflix</li> {/* Netflix text */}
            <li>Home</li> {/* Home link */}
            <li>TVShows</li> {/* TV Shows link */}
            <li>Movies</li> {/* Movies link */}
            <li>Latest</li> {/* Latest link */}
            <li>MyList</li> {/* My List link */}
            <li>Browse by Languages</li> {/* Browse by Languages link */}
          </ul>
        </div>
      </div>
      <div className="header_right">
        {" "}
        {/* Right side of the header */}
        <ul>
          <li>
            <SearchIcon /> {/* Search icon */}
          </li>
          <li>
            <NotificationsNoneIcon /> {/* Notifications icon */}
          </li>
          <li>
            <AccountBoxIcon /> {/* Account icon */}
          </li>
          <li>
            <ArrowDropDownIcon /> {/* Dropdown icon */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
