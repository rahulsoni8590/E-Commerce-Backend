import mongoose from "mongoose";
import { CustomError } from "../../../errorHandler/errorHandler.js";
import UserRepository from "../repository/user.repository.js"

export default class UserController{
    constructor(){
        this.userRepo = new UserRepository()
    }

    async postRegister(req,res,next){
        try{
            // if any parameter is missing then pass the custom Error in the next()
            const {name,email,password,type,age} = req.body;
            if(!name || !email || !password || !type || !age){
                return next(new CustomError("Please provide all the necessary details", 400))
            }
            const newUser = await this.userRepo.register(req.body)
            res.status(201).send(newUser)
        }catch(error){
            next(error)
        }
        
    }

    async postLogin(req,res,next){
        try{
            const {email,password} = req.body;
            if(!email || !password){
                return next(new CustomError("Please provide Email and password", 400));
            }
            const user = await this.userRepo.find(email)
            if(!user){
                return next(new CustomError("User not found, Please register first", 400));
            }
            console.log(user)
            const checkPassword = await user.comparePassword(password);
            console.log(checkPassword)
            if(!checkPassword){
                return next(new CustomError("Please provide valid Email Password", 404))
            }
            const token = user.getJWTToken();
            const cookieOptions = {
                expires: new Date(Date.now() + 1*24*60*60*1000),
                httpOnly:false
            }
            res.status(200).cookie("token", token, cookieOptions).json({status:"Login Successfull","token":token, "expiry":cookieOptions.expires})
            }catch(err){
                next(err)
            }
    }

    async postLogout(req,res,next){
        res.clearCookie('token');
        res.send("logout")
    }
}