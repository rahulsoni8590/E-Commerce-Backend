import mongoose from "mongoose";
import CartRepository from "../repository/cart.repository.js";

export default class CartController{
    constructor(){
        this.cartRepo = new CartRepository()
    }

    async add(req,res,next){

    }

    async get(req,res,next){
        
    }

    async remove(req,res,next){
        
    }
    
}