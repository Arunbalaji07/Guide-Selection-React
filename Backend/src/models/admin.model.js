import mongoose from "mongoose";

const AdminData = new mongoose.Schema({
        name: {type: String, required: true},
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    {collection: "admin-data"}
)

const AdminModel = new mongoose.model("AdminData", AdminData)

export default AdminModel