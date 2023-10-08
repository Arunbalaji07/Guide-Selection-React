import {Router} from "express";
import {createStudent, getAllStudent,getSingleStudent, studentLogin, updateStudent, deleteStudent} from "./handlers/student.js";
import {createStaff, getAllStaff, getSingleStaff,deleteStaff,staffLogin, updateStaff} from "./handlers/staff.js";
import {createAdmin, adminLogin, getAllAdmin,getSingleAdmin,updateAdmin,deleteAdmin} from "./handlers/admin.js";
import { getAllProjects, registerProject,getSingleProject,getGuideProject} from "./handlers/register.js";

const router = Router()


// get all students
router.get('/students', getAllStudent)
// get single student
router.get('/student/:regno', getSingleStudent)
// student signup
router.post('/register-student', createStudent)
// student login
router.post('/login-student', studentLogin)
// update student
router.put('/update-student/:id', updateStudent)
// delete student
router.delete('/delete-student/:id', deleteStudent)




// get all staff
router.get('/staffs', getAllStaff)
// get single staff
router.get('/single-staff/:id', getSingleStaff)
// staff signup
router.post('/register-staff', createStaff)
// staff login   
router.post('/login-staff', staffLogin)
// stude
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
// to get single admin
router.get('/single-admin/:id', getSingleAdmin)
// to update a single admin 
router.put('/update-admin/:id', updateAdmin)
// to delete a single admin
router.delete('/delete-admin/:id', deleteAdmin)
export default router

// // to get all registeration
// router.get('/register-all', getAllRegister)
// // to get a single register
// router.get('/register/:id', getSingleRegister)
// // create new register
// router.post('/register-req', createRegister)


// get all projects
router.get('/projects', getAllProjects)
// // register project
router.post("/register-project", registerProject)
// to get a single register
router.get('/register/:id', getSingleProject)
// to get particular register with guide name
router.get('/register-guide', getGuideProject)