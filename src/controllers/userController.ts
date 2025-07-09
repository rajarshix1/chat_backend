import { Request, Response } from "express";
import * as bcrypt from "bcrypt"
import { IUser, UserModel } from "../models/UserModel";
import { Document } from "mongoose";
export const register = async (req: Request, res: Response) =>{
    const {body} = req
    console.log(body)
    const saltRounds = parseInt(process.env.SALT || "10", 10);

    const salt:any = await bcrypt.genSalt(saltRounds);
    let hashedPassword: string | undefined
    if(body.password){
        console.log(body.password, salt)
        hashedPassword = await bcrypt.hash(body.password, salt);
    }
    const userCreated: Document<unknown, {}, IUser, {}> & IUser = await UserModel.insertOne({
        name: body.name,
        email: body.email,
        password: hashedPassword,
        phone: body.phone,
    })
    const response = JSON.parse(JSON.stringify(userCreated))
    response.password = undefined
    res.status(201).send(userCreated);
}