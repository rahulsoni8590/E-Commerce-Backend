import { ObjectId } from "mongodb";
import orderModel from "../model/order.schema.js";
import cartModel from "../../cart/model/cart.schema.js"
import userModel from "../../users/model/user.schema.js"

export default class OrderRepository{

    async placeOrder(userid){
        const resp = await this.getTotalAmout(userid)
        return resp
    }
    aggregate;

    async getTotalAmout(userid){
        const cartItems = await cartModel.find({_id: new ObjectId(userid)}).populate({path:"productid",model:"Product"})
        return cartItems
    }
}


// const items = await collection.aggregate([
//     //1. get cart item from the user
//     {$match:{userId:new ObjectId(userId)}},
//     //2/ get the products for product collection using the productiD of cartitems
//     // this will attach the productinfo as a nested arayy of objects in the matched documents.
//     {$lookup:{
//         from:"products",
//         localField:"productID",
//         foreignField:"_id",
//         as:"productInfo"
//     }},
//     //3// so to  make separate document will use unwind 
//     {$unwind:"$productInfo"},
//     //4. Calculate total amout for each cart Items
//     {$addFields:{"totalAmount":{$multiply:["$productInfo.price", "$quantity"]}}}
// ]).toArray();
// return items
