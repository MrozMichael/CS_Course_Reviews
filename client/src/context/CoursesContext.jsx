import React, { createContext, useContext, useEffect, useState } from "react";


const CoursesContext = createContext();

const coursesApiUrl = import.meta.env.VITE_COURSES_API;

export const useCourses = () => useContext(CoursesContext);

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  useEffect( () => {
    const fetchCourses = async() => {
      try {
        const response = await fetch(coursesApiUrl);
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

  //
  const handleAdd = async ({ name, description }) => {
    const newCourse = {
      name,
      description,
      reviews: [],
    };
    const response = await fetch(coursesApiUrl, {
      method: "POST", 
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(newCourse), 
    });
    return response.json();
  }; 

  const handleDelete = async (id) => {
    const response = await fetch(coursesApiUrl,`/${id}`, {
      method: "DELETE",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json();
  };
  //add method for update and other methods
  return (
    <CoursesContext.Provider value={{ courses, handleAdd, handleDelete }}>
      {children}
    </CoursesContext.Provider>
  );
};
