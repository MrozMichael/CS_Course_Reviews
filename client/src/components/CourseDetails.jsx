import { useParams } from "react-router-dom";
import { useCourses } from "../context/CoursesContext";

function CourseDetails() {
    const { courses } = useCourses();
    const { id } = useParams();
    const course = courses.find((c) => c._id == id)
    console.log('In coursedteails component, course is', courses)
    //todo: replace reviews array with <Review /> component
    return (
        <div className="course">
           <h2>Course Title: {course.courseName}</h2>
           <h3>Course Description: {course.description}</h3>
            {course.reviews.length > 0 ? 
              (
                <ul style={{listStyleType: "none"}}>
                    {course.reviews.map((review) => <li>{review}</li>) }
                </ul>
              ) :
              (
                <div>No reviews yet :( </div>
              )
            
            } 
        </div>
    )
}

export default CourseDetails