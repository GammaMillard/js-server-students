
import { Router } from "express";
import { getMajors, getSingleStudent, getStudents, getStudentsByMajor } from "../controllers/controllers.js";

const router = Router()




router.get('/student', getStudents )
router.get('/major', getMajors)
router.get('/major/:major', getStudentsByMajor)
router.get('/student/:id', getSingleStudent)



export default router