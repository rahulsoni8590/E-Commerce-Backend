import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
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
    rating:
    {
        type:Number,
        min:[0, "Rating should be between 0 to 5"],
        max:[5, "Rating should be between 0 to 5"],
        required:true
    }
});

const ratingModel = mongoose.model("Rating", ratingSchema)

export default ratingModel