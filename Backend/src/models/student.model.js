import mongoose from "mongoose";

const Student = new mongoose.Schema(
  {
    name: { type: String, required: true },
    regno: { type: String, required: true },
    email: { type: String, required: true },
    batch: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "student-data" },
);

const StudentModel = new mongoose.model("StudentData", Student);

export default StudentModel;
