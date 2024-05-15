import mongoose from "mongoose";

// Schema = name,description,image, price, category-array,stock,ratings-array

const productSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:[true, "Name is require"],
        minlength:[3, "Minimum length of product Name should be three"],
        maxlength:[20, "Maximum length of product Name should be 20"]

    },
    description:
    {
        type:String,
        required:[true, "Description is require"],
        minlength:[10, "Minimum length of product Description should be 10"],
        maxlength:[100, "Maximum length of product Description should be 100"]
    },
    price:
    {
        type:Number,
        required:[true, "Price is require"],
        min:[1, "Minimum price should be 1"],
    },
    category:
    [
        {
            type:String
        }
    ],
    stock:
    {
        type:Number,
        min:[0, "Minimum stock should be 0"],
        max:[100, "Maximum stock should be 100"],
        required:[true, "Stock is require"]
    },
    ratings:
    [
        {      
            type:mongoose.Schema.Types.ObjectId,
            ref:"Rating"
        }
    ]
})

const productModel = mongoose.model("Product", productSchema)

export default productModel