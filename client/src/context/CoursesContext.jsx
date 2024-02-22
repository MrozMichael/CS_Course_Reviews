import React, { createContext, useContext, useState } from "react";

const CoursesContext = createContext();

export const useCourses = () => useContext(CoursesContext);

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "CSCI 1110",
      description: "Intro to CS",
      reviews: [],
      avgRating: 4.7,
      avgDifficulty: 3.2,
    },
    {
      id: 2,
      name: "CSCI 1315",
      description: "Discrete Math",
      reviews: ["Dr. DeGagne is great.", "Fun course!"],
      avgRating: 5,
      avgDifficulty: 4.6,
    },
  ]);

  const handleAdd = ({ name, description }) => {
    const newCourse = {
      id: courses.length + 1,
      name,
      description,
      reviews: [],
    };
    setCourses([...courses, newCourse]);
  };

   //currently not used, refactor to delete specific reviews 
  const handleDelete = (id) => {
    setCourses((currentCourses) => currentCourses.filter((course) => course.id !== id));
  };

  return (
    <CoursesContext.Provider value={{ courses, handleAdd, handleDelete }}>
      {children}
    </CoursesContext.Provider>
  );
};
