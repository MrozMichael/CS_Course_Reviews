import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import courseRouter from './routes/course.route.js'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(express.json())

const corsOptions = {
    origin: process.env.FRONTEND_URL
}

app.use(cors(corsOptions))

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to DB"))

app.get("/", (req, res) => {
    res.send("Very important data")
})

app.use("/api/courses", courseRouter)

app.listen(process.env.PORT, () => {
    console.log("App listening on port", process.env.PORT)
})