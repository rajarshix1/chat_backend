import { Request, Response } from "express";
import * as bcrypt from "bcrypt"
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
    res.status(201).send(hashedPassword);
}