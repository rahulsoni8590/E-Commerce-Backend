import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
  userid:
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  productid:
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"   
  },
  quantity:
  {
    type:Number,
    min:[1, "Minimum quantity should be 1"],
    max:[20, "Maximum quantity should be 5"],
    required:true
  }
});
  
const cartModel = mongoose.model("Cart", cartSchema);

export default cartModel;
