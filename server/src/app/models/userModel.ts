import { Document, Schema, model } from "mongoose";
import UserInterface from "../types/user";

const userSchema = new Schema<UserInterface>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    resetPasswordToken: { type: String, default: "" },
    resetPasswordExpires: { type: Date, default: new Date() }
});

export default model<UserInterface>("user", userSchema);
