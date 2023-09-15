import StudentModel from "../models/student.model.js";
import { comparePassword,hashPassword,createJWTStudent } from "../modules/auth.js";

export const createStudent = async (req, res) => {
    console.log(req.body)
    try{
        const user = await StudentModel.create({
            name: req.body.name,
            regno: req.body.regno,
            batch: req.body.batch,
            email: req.body.email,
            password: await hashPassword(req.body.password)
        })
        const token = createJWTStudent(user)
        res.json({token})
        // res.json({status:"ok"})
    } catch(err) {
        console.log(err)
        // res.json({status: "error", error: "Duplicate email"})
    }
}

export const studentLogin = async (req, res) => {
    console.log(req.body)
    const user = await StudentModel.findOne({
        regno: req.body.regno,
    })

    const isValid = await comparePassword(req.body.password, user.password)

    if(!isValid) {
        res.status(401)
        res.json({message: "nope"})
        return
    }

    const token = createJWTStudent(user)
    res.json({token})
}