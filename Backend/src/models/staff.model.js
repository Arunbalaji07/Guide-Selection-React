import mongoose from "mongoose";

const Staff = new mongoose.Schema({
        name: {type: String, required: true},
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        img: { contentType: String, data: Buffer},
        specializations: { type: String, required: true},
    },
    {collection: "staff-data"}
)

const StaffModel = new mongoose.model("StaffData", Staff)

export default StaffModel