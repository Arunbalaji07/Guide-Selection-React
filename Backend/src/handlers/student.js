import StudentModel from "../models/student.model.js";
import { comparePassword, hashPassword, createJWTStudent } from "../modules/auth.js";

// Create a new Student

export const createStudent = async (req, res) => {
  console.log(req.body);
  try {
    const user = await StudentModel.create({
      name: req.body.name,
      regno: req.body.regno,
      batch: req.body.batch,
      email: req.body.email,
      password: await hashPassword(req.body.password),
    });
    const token = createJWTStudent(user);
    res.json({ token });
    // res.json({status:"ok"})
  } catch (err) {
    console.log(err);
    // res.json({status: "error", error: "Duplicate email"})
  }
};

// Student Login

export const studentLogin = async (req, res) => {
  console.log(req.body);
  const user = await StudentModel.findOne({
    regno: req.body.regno,
  });

  if (!user) {
    res.json({ status: "error", error: "Invalid login" });
  }

  const isPasswordValid = await comparePassword(
    req.body.password,
    user.password,
  );

  if (isPasswordValid) {
    const token = createJWTStudent(user);

    return res.json({ status: "success", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }

};

// Get all students

export const getAllStudent = async (req, res) => {
  try {
    const user = await StudentModel.find();
    res.json(user);
  } catch (err) {
    console.error(err);
  }
};

// Get single  student

export const getSingleStudent = async (req, res) => {

    try {
        const user = await StudentModel.findOne({
            regno: req.params.regno
        })

        res.json(user);

    } catch(err) {
        res.json(err);
    }
}

// Update student

export const updateStudent = async (req, res) => {
    try {
        const user = await StudentModel.findByIdAndUpdate(req,user._id, req.body, {
            new: true
        })
        res.json(user);
    } catch(err) {
        console.log(err);
    }
}

// Delete student

export const deleteStudent = async (req, res) => {
    try {
        const user = await StudentModel.deleteOne(req.params._id)
        res.json("deleted")
    } catch(err) {
        console.log(err)
    }
}