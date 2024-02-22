import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Courses.css";
import CourseDetails from "../components/CourseDetails";

const DetailedCoursePage = ({course}) => {
  return (
    <>
      <Header />
      <CourseDetails course={course}/>
  </>
  );
};

export default DetailedCoursePage;
