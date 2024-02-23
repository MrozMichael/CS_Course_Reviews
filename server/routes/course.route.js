import express from 'express'
import {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} from "../controller/course.controller.js"

const router = express.Router()

router.get("/", getAllCourses)
router.post("/", createCourse)
router.get("/:id", getCourseById)
router.patch("/:id", updateCourse)
router.delete("/:id", deleteCourse)

export default router