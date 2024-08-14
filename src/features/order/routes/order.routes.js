import express from "express";
import OrderController from "../controller/order.controller.js";

const orderRouter = express.Router();

const orderController = new OrderController();

orderRouter.get("/place-order",(req,res,next)=>{
    orderController.placeOrder(req,res,next)
})

export default orderRouter;