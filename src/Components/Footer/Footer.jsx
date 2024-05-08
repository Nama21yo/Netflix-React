import React from "react"; // Importing React library
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"; // Importing Facebook icon
import InstagramIcon from "@mui/icons-material/Instagram"; // Importing Instagram icon
import YouTubeIcon from "@mui/icons-material/YouTube"; // Importing YouTube icon
import "./Footer.css"; // Importing styles for the footer

const Footer = () => {
  return (
    <div className="footer_outer_container">
      {" "}
      {/* Outer container for the footer */}
      <div className="footer_inner_container">
        {" "}
        {/* Inner container for the footer */}
        <div className="footer_icons">
          {" "}
          {/* Container for social media icons */}
          <FacebookOutlinedIcon /> {/* Facebook icon */}
          <InstagramIcon /> {/* Instagram icon */}
          <YouTubeIcon /> {/* YouTube icon */}
        </div>
        <div className="footer_data">
          {" "}
          {/* Container for footer data */}
          <div>
            {" "}
            {/* Column 1 */}
            <ul>
              <li>Audio Description</li> {/* List item */}
              <li>Investor Relations</li> {/* List item */}
              <li>Legal Notices</li> {/* List item */}
            </ul>
          </div>
          <div>
            {" "}
            {/* Column 2 */}
            <ul>
              <li>Help Center</li> {/* List item */}
              <li>Jobs</li> {/* List item */}
              <li>Legal Notices</li> {/* List item */}
            </ul>
          </div>
          <div>
            {" "}
            {/* Column 3 */}
            <ul>
              <li>Help Center</li> {/* List item */}
              <li>Jobs</li> {/* List item */}
              <li>Cookie Preferences</li> {/* List item */}
            </ul>
          </div>
          <div>
            {" "}
            {/* Column 4 */}
            <ul>
              <li>Gift Cards</li> {/* List item */}
              <li>Terms of Use</li> {/* List item */}
              <li>Corporate Information</li> {/* List item */}
            </ul>
          </div>
          <div>
            {" "}
            {/* Column 5 */}
            <ul>
              <li>Media Center</li> {/* List item */}
              <li>Privacy</li> {/* List item */}
              <li>Contact Us</li> {/* List item */}
            </ul>
          </div>
        </div>
        <div className="service_code">
          {" "}
          {/* Container for service code */}
          <p>Service Code</p> {/* Service code text */}
        </div>
        <div className="copy-write">&copy; 1997-2024 Netflix, Inc.</div>{" "}
        {/* Copywrite text */}
      </div>
    </div>
  );
};

export default Footer;
