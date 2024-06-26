import express from "express";
import {allStudents, updateStudent, createStudent, deleteStudent} from "../controllers/student.js";
const router = express.Router();
router.get("/all",allStudents);
router.put("/update", updateStudent);
router.post("/create", createStudent);
router.delete("/delete", deleteStudent);
export default router;

