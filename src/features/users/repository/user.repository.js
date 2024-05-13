import mongoose from "mongoose";
import { CustomError } from "../../../errorHandler/errorHandler.js";
import userModel from "../model/user.schema.js";

export default class UserRepository{
    async register(userData){
        try{
            const newUser = new userModel(userData);
            await newUser.save()
            return newUser
        }catch(error){
            throw error
        }
    }

    async find(email){
        try{
            const user = await userModel.findOne({email:email});
            return user
        }catch(err){
            throw err
        }
    }
}