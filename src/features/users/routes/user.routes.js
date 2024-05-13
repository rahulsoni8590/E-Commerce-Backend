import express from "express";
import UserController from "../controller/user.controller.js";

const userRouter = express.Router()

// Controller function
const userController = new UserController();

// register
userRouter.post("/register", (req,res,next)=>{
    userController.postRegister(req,res,next)
})

//login
userRouter.post("/login", (req,res,next)=>{
    userController.postLogin(req,res,next)
})

//login
userRouter.post("/logout", (req,res,next)=>{
    userController.postLogout(req,res,next)
})

// reset password
// userRouter.post("/reset", postReset)

// // forgot password
// userRouter.post("/forgot", postForgot)

export default userRouter;



// import express from "express";
// const userRouter = express.Router()
// export default userRouter