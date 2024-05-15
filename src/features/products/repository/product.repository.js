import { CustomError } from "../../../errorHandler/errorHandler.js"
import productModel from "../model/product.schema.js"
import ratingModel from "../model/rating.schema.js"
import {ObjectId} from "mongodb"

export default class ProductRepository{
    async add (productData){
        try{
            const newProduct = await new productModel(productData).save()
            return newProduct

        }catch(err){
            throw err
        }
    }

    async getAll (){
        try{
            const all = await productModel.find();
            return all
        }catch(error){
            throw error
        }
    }

    async getOne (id){
        try{
            const product = await productModel.findById(id);
            return product
        }catch(error){
            throw error
        }
    }

    async filter(parameter){
        //pending passing category as array
        const {min,max,category} = parameter
        const query = {}
        if(max){
            const maximum = Number(max)
            query.price = {$lte:maximum}
        }
        if(min){
            const minimum = Number(min);
            query.price = {...query.price, $gte:minimum}
        }
        if(category){
            query.category = category
        }
        const product = await productModel.find(query)
        return product
    }

    async rate (userid,productid,rate){
        //Steps::
        // Check Product first
        // If rating is already there then update the rating
        // If rating is not present then add new rating.
        // Add the rating in the rating model
        // Add the object id of the rating create above in the ratings array of the product model.
        try{
        const findProduct = await productModel.findById(productid);
        if(!findProduct){
            throw new CustomError("Product not found", 404)
        }else{
            const findRating = await ratingModel.findOne({userid:new ObjectId(userid),productid:new ObjectId(productid)});
            if(findRating){
                findRating.rating = rate;
                findRating.save();
                console.log(findRating)
                return findRating
            }else{
                const newRating = await new ratingModel({userid:new ObjectId(userid),productid:new ObjectId(productid),rating:rate}).save();
                const productRateArray = await productModel.findById(productid);
                productRateArray.ratings.push(newRating._id)
                await productRateArray.save();
                return newRating;
            }
        }
    }catch(err){
        throw err
    }
    }
}

