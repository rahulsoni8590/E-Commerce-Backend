import jwt from "jsonwebtoken";
import { CustomError } from "../errorHandler/errorHandler.js";

const jwtAuth = (req,res,next)=>{
    try{
        const token = req.cookies.token;
        if(!token){
        throw new CustomError("Token not Found", 404)
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(!payload){
            throw new CustomError("Verification Failed", 400)
        }
        console.log(payload)
        req.id = payload.id;
        req.type = payload.type;
        next();
    }catch(err){
        next(err)
    }
}


export default jwtAuth;