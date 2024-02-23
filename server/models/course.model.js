import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        courseName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        reviews: {
            type: Array,
            default: []
        }
    }
)

const Course = mongoose.model("Course", courseSchema)

export default Course