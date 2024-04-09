import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user";
import patientRoute from "./routes/patient";
import cors from 'cors'

const app = express();
app.use(express.json())

app.use(cors())

app.use("/api/v1/user", userRoute)
app.use("/api/v1/patient", patientRoute)

app.listen(8000, () => {
    console.log("Listening to port 8000")
})