import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Dal CS Course Information</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/courseReviewForm">Add Course Review</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
