import mongoose, { Schema } from "mongoose";
    
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
        reviews: [
            {
                content: {
                    type: String,
                    default: "",
                },
                rating: {
                    type: Number,
                    min: [0, 'Rating must be at least 0, got {VALUE}'],
                    max: [5, 'Rating can only go up to 5, got {VALUE}'],
                    require: true,
                    
                },
                difficulty: {
                    type: Number,
                    min: [0, 'Difficulty must be at least 0, got {VALUE}'],
                    max: [5, 'Difficulty can only go up to 5, got {VALUE}'],
                    require: true,
                },
                workload: {
                    type: Number,
                    min: [0, 'Workload must be at least 0, got {VALUE}'],
                    max: [5, 'Workload can only go up to 5, got {VALUE}'],
                    require: true,
                },
                instructor: {
                    type: String,
                    default: "Don't Remember/Rather not say"
                },
                date: {
                    type: String,
                    require: true,
                }
            }
        ]
    }
)

const Course = mongoose.model("Course", courseSchema)

export default Course