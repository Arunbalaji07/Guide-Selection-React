import mongoose from "mongoose";

const Student = new mongoose.Schema({
    member1: {type: String, required: true},
    regno1: {type: String, required: true},
    phno1: {type: String, required: true, maxLength: 10},
    email1: { type: String, required: true, unique: true },
    guide: {type: String, required: true},
    title: {type: String, required: true},
    member2: {type: String, required: true},
    regno2: {type: String, required: true},
    phno2: {type: String, required: true, maxLength: 10},
    email2: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    },
    {collection: "student-data"}
)

const StudentModel = new mongoose.model("StudentData", Student)

export default StudentModel