import React from "react";
import Header from "../components/Header";

const Home = () => {

  return (
    <>
      <Header />
      <div>Dal CS Course Review Page</div>
      <div className="todos">
        <h2>todos:</h2>
        <ul>
          <li>Add review objects to course's review arr (start w/ adjusting schema?)</li>
          <li>add course review form</li>
          <li> Make a proper homepage</li>
          <li>Make it stylish</li>
        </ul>
      </div>
    </>
  );
};

export default Home;
