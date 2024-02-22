import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const app = express()
const port = 3000

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to DB"))

app.get("/", (req, res) => {
    res.send("Very important data")
})


app.listen(port, () => {
    console.log("App listening on port", port)
})