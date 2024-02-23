import { Link } from "react-router-dom"

function Course( { course }) {
    //todo: add avgRating and avgDifficulty attribute for each 
    return (
        <div className="course">
           <h2>{<Link to={`/courses/${course._id}`} params={ {course }}>{course.courseName}</Link>}</h2>
           <h3>Course Description: {course.description}</h3>
           <p> { course.avgRating ? "Rating:" + course.avgRating + "/5" : "" }</p>
           <p> { course.avgDifficulty ? "Difficulty: " +course.avgDifficulty + "/5" : "" }</p>
        </div>
    )
}

export default Course