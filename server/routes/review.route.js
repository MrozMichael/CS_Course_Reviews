import express from 'express'

import {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview
} from "../controller/review.controller.js"

const router = express.Router()

router.get("/", getAllReviews)
router.post("/", createReview)
router.get("/:id", getReviewById)
router.patch("/:id", updateReview)
router.delete("/:id", deleteReview)

export default router