import React from "react";
import Header from "../components/Header";
import { useCourses } from "../context/CoursesContext";

const CourseReviewForm = () => {
  const { courses } = useCourses();
  //todo: add search bar where user can find course, then choose to add review
  //then render form or redirect to one, filling in form sends post request 
  // for that review, and adds it to that courses' review array. 
  return (
    <>
      <Header/>
      <div>
        Course Review Form Will go Here!
        <p>Add menu of all existing courses so user can select which to review</p>
        <p>then render a form letting them fill in a review for that course</p>

      </div>
    </>
  );
};


export default CourseReviewForm