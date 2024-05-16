import express from "express";
import CartController from "../controller/cart.controller.js";

const cartRouter = express.Router()

const cartController = new CartController();

cartRouter.delete("/:cartid", (req,res,next)=>{
    cartController.remove(req,res,next)
})

cartRouter.post("/", (req,res,next)=>{
    cartController.add(req,res,next)
})

cartRouter.get("/", (req,res,next)=>{
    cartController.get(req,res,next)
})



export default cartRouter;



// import express from "express";
// const userRouter = express.Router()
// export default userRouter