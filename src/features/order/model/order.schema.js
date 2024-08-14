import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userid: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    amount:
    {
        type:Number
    },
    timeStamp: 
    {
        type:Date,
        default: Date.now
    }
})

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel
