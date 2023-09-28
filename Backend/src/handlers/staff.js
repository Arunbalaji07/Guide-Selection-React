import StaffModel from "../models/staff.model.js";
import { comparePassword, hashPassword, createJWTStaff} from "../modules/auth.js";

export const createStaff = async (req, res) => {
    console.log(req.body)
    try{
        const user = await StaffModel.create({
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

export const staffLogin = async (req, res) => {
    console.log(req.body)
    const user = await StaffModel.findOne({
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

export const getAllStaff = async (req, res) => {
    try {
        const data = await StaffModel.find()
        res.json(data)
    } catch (err) {
        console.error(err)
    }
}