import StaffModel from "../models/staff.model.js";
import { comparePassword, hashPassword, createJWTStaff} from "../../modules/auth.js";
import AdminModel from "../models/admin.model.js";

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

export const adminLogin = async (req, res) => {
    console.log(req.body)
    const user = await AdminModel.findOne({
        regno: req.body.regno,
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