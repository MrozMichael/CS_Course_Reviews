import "../styles/Courses.css"

function CourseDetails({ course }) {
    //todo: replace reviews array with <Review /> components
    return (
      <>
        {course != null ?
        (
          <div className="courseDetails">
           <h2>{course.courseName}</h2>
           <h3>{course.description}</h3>
            {course.reviews.length > 0 ? 
              (
                <ul style={{listStyleType: "none"}}>
                  <h3>Course Reviews</h3>
                    {course.reviews.map((review) => <li>{review}</li>) }
                </ul>
              ) :
              (
                <div>No reviews yet :( </div>
              )
            
            } 
        </div>
    ) : 
    (
      <>
      </>
    )}
    </>
    )
}

export default CourseDetails