import {Router} from "express";
import {createStudent, getAllStudent, studentLogin} from "./handlers/student.js";
import {createStaff, getAllStaff, getSingleStaff,deleteStaff,staffLogin, updateStaff} from "./handlers/staff.js";
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
// get single staff
router.get('/single-staff/:id', getSingleStaff)
// staff signup
router.post('/register-staff', createStaff)
// staff login   
router.post('/login-staff', staffLogin)
// staff delete TODO: delete
router.delete('/delete-staff/:id', deleteStaff)
// to update staff   TODO: update
router.put('/update-staff/:id', updateStaff)




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