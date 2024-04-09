import express from "express";
import patient from "../controller/patient";

const router = express();

router.post("/appointment", patient.appointment);
router.get("/appointment/:id", patient.getPatient);

export default router;