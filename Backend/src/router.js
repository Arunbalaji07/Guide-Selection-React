import {Router} from "express";
import {createStudent, studentLogin} from "./handlers/student.js";
import {createStaff, staffLogin} from "./handlers/staff.js";
import {createAdmin, adminLogin} from "./handlers/admin.js";

const router = Router()

// student signup
router.post('/register-student', createStudent)
// student login
router.post('/login-student', studentLogin)


// staff signup
router.post('/register-staff', createStaff)
// student login
router.post('/login-staff', staffLogin)

// admin signup
router.post('/register-admin', createAdmin)
// admin login
router.post('/login-admin', adminLogin)
export default router