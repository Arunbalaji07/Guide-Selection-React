import StudentModel from "../models/student.model.js";
import { comparePassword,hashPassword,createJWTStudent } from "../modules/auth.js";

export const createStudent = async (req, res) => {
    console.log(req.body)
    try{
        const user = await StudentModel.create({
            member1: req.body.member1,
            regno1: req.body.regno1,
            phno1: req.body.phno1,
            email1: req.body.email1,
            guide: req.body.guide,
            title: req.body.title,
            member2: req.body.member2,
            regno2: req.body.regno2,
            phno2: req.body.phno2,
            email2: req.body.email2,
            password: await hashPassword(req.body.password),
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
        regno1: req.body.regno1,
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

export const getAllStudent = async (req, res) => {
    try {
        const data = await StudentModel.find()
        res.json(data)
    } catch (err) {
        console.error(err)
    }
}