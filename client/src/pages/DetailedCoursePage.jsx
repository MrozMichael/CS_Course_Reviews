import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Courses.css";
import CourseDetails from "../components/CourseDetails";
import { useCourses } from "../context/CoursesContext";

const DetailedCoursePage = () => {
  
  return (
    <>
      <Header />
      <CourseDetails/>
  </>
  );
};

export default DetailedCoursePage;
