import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Courses.css";
import { useCourses } from "../context/CoursesContext";
import Course from "../components/Course";

const Courses = () => {
  const { courses } = useCourses();

  return (
    <>
      <Header />
      <h2 style={{textAlign: "center"}}>Courses</h2>
      <h4 style={{textAlign: "center"}}>Click Course Name for More Details</h4>
      {
        courses.length > 0 ? 
        (
          <div className="courses_list">
            {courses.map(course => (
              <div className="single_course">
              <Course course={course}/>
              </div>
            ))}
          </div>
        ) : (
          <>
          <h2>Failed to load courses...</h2>
          </>
        )
      }
  </>
  );
};

export default Courses;
