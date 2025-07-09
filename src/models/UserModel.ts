import mongoose, { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    phone: number;
    password: string;
}
const UserSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, unique:true, required: true},
    phone: {type: Number, unique:true, required: true},
    password: {type: String, required: true},
})

export const UserModel = model<IUser>("Users", UserSchema)