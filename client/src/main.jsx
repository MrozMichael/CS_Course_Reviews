import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import { CoursesProvider } from "./context/CoursesContext";
import Form from "./pages/Form";
import Courses from "./pages/Courses";
import CourseReviewForm from "./pages/CourseReviewForm";
import CourseDetails from "./components/CourseDetails";
import DetailedCoursePage from "./pages/DetailedCoursePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  /*
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/add-task",
    element: <Form />,
  },
  */
  {
    path: "/courses",
    element: <Courses />
  },
  {
    path: "/courseReviewForm",
    element: <CourseReviewForm/>
  },
  {
    path: "/courses/:id",
    element: <DetailedCoursePage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoursesProvider>
      <RouterProvider router={router} />
    </CoursesProvider>
  </React.StrictMode>
);
