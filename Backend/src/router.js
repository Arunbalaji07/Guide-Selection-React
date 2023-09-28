import {Router} from "express";
import {createStudent, getAllStudent, studentLogin} from "./handlers/student.js";
import {createStaff, getAllStaff, staffLogin} from "./handlers/staff.js";
import {createAdmin, adminLogin, getAllAdmin} from "./handlers/admin.js";
import { getAllProjects, registerProject } from "./handlers/register.js";

const router = Router()


// get all students
router.get('/students', getAllStudent)
// student signup
router.post('/register-student', createStudent)
// student login
router.post('/login-student', studentLogin)




// get all staff
router.get('/staffs', getAllStaff)
// staff signup
router.post('/register-staff', createStaff)
// student login
router.post('/login-staff', staffLogin)



// get all admin
router.get('/admin', getAllAdmin)
// admin signup
router.post('/register-admin', createAdmin)
// admin login
router.post('/login-admin', adminLogin)
export default router



// get all projects
router.get('/projects', getAllProjects)
// register project
router.post("/register-project", registerProject)