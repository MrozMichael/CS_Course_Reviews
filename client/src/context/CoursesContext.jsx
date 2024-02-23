import React, { createContext, useContext, useEffect, useState } from "react";


const CoursesContext = createContext();

export const useCourses = () => useContext(CoursesContext);

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  useEffect( () => {
    const fetchCourses = async() => {
      try {
        const response = await fetch(import.meta.env.VITE_COURSES_API);
        if (!response.ok) {
          throw new Error("Error with Network Response");
        }
        const data = await response.json();
        setCourses(data);
      }
      catch(error) { 
        console.error("Failed to fetch courses,", error);
      }
    };
    fetchCourses();
  }, [])

  //refactor rest of methods to connect with backend
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
