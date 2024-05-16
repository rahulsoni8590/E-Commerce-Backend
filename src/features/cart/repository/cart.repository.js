import mongoose from "mongoose";
import {ObjectId} from "mongodb"
import { CustomError } from "../../../errorHandler/errorHandler.js";
import cartModel from "../model/cart.schema.js";
import userModel from "../../users/model/user.schema.js";
import productModel from "../../products/model/product.schema.js";

export default class CartRepository{

    async add(userid,productid,quantity){
        // check if product exist >> update quantity
        // else create new product
        try{
        const product = await productModel.findById(productid);
        if(!product){
            throw new CustomError("Product not found",404)
        }else if (product.stock < quantity){
            throw new CustomError("Product is not in stock",404)
        } else{
            const existProduct = await cartModel.findOne({userid:new ObjectId(userid), productid:new ObjectId(productid)});
            console.log(existProduct)
            if(existProduct){
                existProduct.quantity+=quantity;
                await existProduct.save()
                return existProduct
            }else{
                const newCart = await new cartModel({userid:new ObjectId(userid), productid:new ObjectId(productid), quantity:quantity}).save();
                const user = await userModel.findById(userid);
                user.cart.push(new ObjectId(newCart._id));
                await user.save()
                return newCart
            }
        }
    }catch(err){
        throw err
    }
    }

    async get(userid){
        try{
            const items = await cartModel.find({userid:new ObjectId(userid)});
            return items
        }catch(error){
            throw error
        } 
    }

    async remove(cartid, userid){
        try{
            const items = await cartModel.findByIdAndDelete(cartid);
            if(!items){
                return "Item not found"
            }else{
                const user = await userModel.findOneAndUpdate({_id:new ObjectId(userid)},{$pull:{cart: new ObjectId(cartid)}});
                return items
            }
            
        }catch(error){
            throw error
        } 
    }
}