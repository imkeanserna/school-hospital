import express from "express";
import user from "../controller/user";

const router = express();

router.post("/signin", user.signin);
router.post("/register", user.register);
router.get("/getDoctor/:id", user.getUser);
router.get("/getDoctors", user.getUsers);
router.get("/appointments", user.getAppointments);


export default router;