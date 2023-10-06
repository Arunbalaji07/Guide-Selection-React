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

// to get all admin users

export const getAllAdmin = async (req, res) => {
    try {
        const data = await AdminModel.find()
        res.json({data: data})
    } catch (err) {
        console.error(err)
    }
}
// to get single admin

export const getSingleAdmin = async (req, res) => {
    try {
        const data = await AdminModel.findById(req.params.id)
        res.json({data: data})
    } catch (err) {
        console.error(err)
    }
}

// to update a single admin

export const updateAdmin = async (req, res) => {
    try {
        const data = await AdminModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        )
        res.json({data: data})
    } catch (err) {
        console.error(err)
    }
}

// to delete a single admin

export const deleteAdmin = async (req, res) => {
    const id = req.params.id;
    try {
      const suggest = await AdminModel.findById(id);
      if(suggest.id === req.params.id) {
        await suggest.deleteOne()
        res.json("success")
      }
      
    } catch (err) {
      console.error(err);
    }
  };