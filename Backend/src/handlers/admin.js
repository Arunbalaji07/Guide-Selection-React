import StaffModel from "../models/staff.model.js";
import { comparePassword, hashPassword, createJWTStaff} from "../modules/auth.js";
import AdminModel from "../models/admin.model.js";


// Create a new Admin
export const createAdmin = async (req, res) => {
    console.log(req.body)
    try{
        const user = await AdminModel.create({
            name: req.body.name,
            email: req.body.email,
            password: await hashPassword(req.body.password)
        })
        const token = createJWTStaff(user)
        res.json({token})
        // res.json({status:"ok"})
    } catch(err) {
        console.log(err)
        // res.json({status: "error", error: "Duplicate email"})
    }
}

// Admin signup
export const adminLogin = async (req, res) => {
    console.log(req.body)
    const user = await AdminModel.findOne({
        email: req.body.email,
    })

    const isValid = await comparePassword(req.body.password, user.password)

    if(!isValid) {
        res.status(401)
        res.json({message: "nope"})
        return
    }

    const token = createJWTStaff(user)
    res.json({token})
}

export const getAllAdmin = async (req, res) => {
    try {
        const data = await AdminModel.find()
        res.json({data: data})
    } catch (err) {
        console.error(err)
    }
}