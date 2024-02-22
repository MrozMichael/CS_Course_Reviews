import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Courses.css";
import { useCourses } from "../context/CoursesContext";
import CourseDetails from "../components/CourseDetails";
import { useParams } from "react-router-dom";

const CourseDetails = ({course}) => {
  return (
    <>
      <Header />
      <CourseDetails course={course}/>
  </>
  );
};

export default Courses;
