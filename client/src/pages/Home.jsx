import React from "react";
import Header from "../components/Header";
import { useCourses } from "../context/CoursesContext";

const Home = () => {

  return (
    <>
      <Header />
      <div>Dal CS Course Review Page</div>
      <div className="todos">
        <h2>front end todos:</h2>
        <ul>
          <li>add course review form</li>
          <li> Make a proper homepage</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
