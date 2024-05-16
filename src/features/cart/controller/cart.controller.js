import mongoose from "mongoose";
import CartRepository from "../repository/cart.repository.js";
import { CustomError } from "../../../errorHandler/errorHandler.js";

export default class CartController{
    constructor(){
        this.cartRepo = new CartRepository()
    }

    async add(req,res,next){
        try{
            const userid = req.id;
            const {productid,quantity} = req.body;
            if(!productid || !quantity){
                return next(new CustomError("Pls provide quantity and product", 400))
            }
            const cart = await this.cartRepo.add(userid,productid,quantity)
            res.status(201).json({success:true, item:cart})
        }catch(err){
            next(err)
        }
    }

    async get(req,res,next){
        try{
            const userid = req.id;
            const cart = await this.cartRepo.get(userid)
            res.status(201).json({items:cart})
        }catch(err){
            next(err)
        }
    }

    async remove(req,res,next){
        try{
            const userid = req.id
            const cartid = req.params.cartid;
            if(!cartid){
                return next(new CustomError("Please enter cardid", 400))
            }
            const result = await this.cartRepo.remove(cartid, userid);
            res.status(200).json({success:true,res:result})
        }catch(err){
            next(err)
        }

    }
    
}