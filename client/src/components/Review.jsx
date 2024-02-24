//A component to display a review object's text content, 

//assume each review object has content, rating, difficulty, instructor
//and date, and workload
const Review = ( {review} ) => {
    return(
        <div className="review">
            <p>Term Taken: {review.date}</p>
            <p>Instructor Name: {review.instructor}</p>
            <p>Course Rating: {review.rating} / 5 </p>
            <p>Course Difficulty: {review.difficulty} / 5</p>
            <p>Course Workload: {review.workload} / 5</p>
            <p>{review.content}</p>
        </div>
    )
}

export default Review;