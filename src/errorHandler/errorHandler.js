import mongoose from "mongoose";

// Custom error Class 
export class CustomError extends Error{
    constructor(message,code){
        super(message);
        this.code = code;
    }
}

// Error middleware
export const ErrorMiddleware = (err,req,res,next)=>{
    console.log(err)
    if (err instanceof mongoose.Error.ValidationError){
        res.status(401).send(err.message);
    } else{
        const errorMessage = err.message || "Something went wrong with server. Please try later"
        const errorCode = err.code || 500
        res.status(errorCode).send(errorMessage);
    }
    next()
}