import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/Courses.css";
import CourseDetails from "../components/CourseDetails";
import { useParams } from "react-router-dom";
import { useCourses } from "../context/CoursesContext";

const DetailedCoursePage = () => {
  const { courses } = useCourses();
  const { id } = useParams();
  const course = courses.find((c) => c._id == id);
  return (
    <>
      <Header />
      <CourseDetails course={course}/>
  </>
  );
};

export default DetailedCoursePage;
