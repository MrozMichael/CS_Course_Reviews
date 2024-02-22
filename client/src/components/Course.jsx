import { Link } from "react-router-dom"

function Course( { course }) {
    return (
        <div className="course">
           <h2>{<Link to={`/courses/${course.id}`}>{course.name}</Link>}</h2>
           <h3>Course Description: {course.description}</h3>
           <p>Rating: {course.avgRating} / 5 </p>
           <p>Difficulty: {course.avgDifficulty} / 5</p>
        </div>
    )
}

export default Course