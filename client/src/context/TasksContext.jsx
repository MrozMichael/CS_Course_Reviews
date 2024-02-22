import React, { createContext, useContext, useState } from "react";

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Assignment 2",
      course: "CSCI 2201",
      dueDate: "1 March",
    },
    {
      id: 2,
      title: "Module 4 Worksheet 1",
      course: "CSCI 1315",
      dueDate: "26 February",
    },
  ]);

  const handleAdd = ({ title, course }) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      course,
      dueDate: "Not Set",
    };
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, handleAdd, handleDelete }}>
      {children}
    </TasksContext.Provider>
  );
};
