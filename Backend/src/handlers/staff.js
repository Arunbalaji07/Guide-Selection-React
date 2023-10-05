import StaffModel from "../models/staff.model.js";
import { comparePassword, hashPassword, createJWTStaff} from "../modules/auth.js";
// Create a new staff
export const createStaff = async (req, res) => {
    console.log(req.body)
    try{
        const user = await StaffModel.create({
            name: req.body.name,
            email: req.body.email,
            img: req.body.img,
            specializations: req.body.specializations,
            password: await hashPassword(req.body.password)
        })
        const token = createJWTStaff(user)
        res.json({token})
        res.json({status:"ok"})
    } catch(err) {
        console.log(err)
        res.json({status: "error", error: "Duplicate email"})
    }
}
// staff login
export const staffLogin = async (req, res) => {
    console.log(req.body);
    const user = await StaffModel.findOne({
      email: req.body.email,
    });
  
    if (!user) {
      res.json({ status: "error", error: "Invalid login" });
    }
  
    const isPasswordValid = await comparePassword(
      req.body.password,
      user.password,
    );
  
    if (isPasswordValid) {
      const token = createJWTStaff(user);
  
      return res.json({ status: "success", user: token });
    } else {
      return res.json({ status: "error", user: false });
    }
  
  };
// To get all staff
export const getAllStaff = async (req, res) => {
    try {
      const user = await StaffModel.find();
      res.json(user);
    } catch (err) {
      console.error(err);
    }
  };

// To get a single staff

export const getSingleStaff = async (req, res) => {
    try {
      const user = await StaffModel.findById(req.params.id);
      res.json(user);
    } catch (err) {
      console.error(err);
    }
  };
  
  // To update a single staff
  
  export const updateStaff = async (req, res) => {
    try {
      const user = await StaffModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
      );
      res.json(user);
    } catch (err) {
      console.error(err);
    }
  };
  
  // To delete a single staff
  
  export const deleteStaff = async (req, res) => {
    try {
      const user = await StaffModel.findByIdAndDelete(req.params._id);
      res.json("deleted");
    } catch (err) {
      console.error(err);
    }
  };
