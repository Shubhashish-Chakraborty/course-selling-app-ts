import mongoose , { Schema , model , Types } from "mongoose";
const ObjectId = Types.ObjectId;

const AdminSchema = new Schema({
    fullname: String,
    adminname: {type: String , unique: true},
    email: String,
    password: String
})


const AdminModel = model("admins" , AdminSchema);

export { AdminModel }