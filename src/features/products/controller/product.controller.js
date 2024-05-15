// 1. Add Product
// 2. Get all Product
// 3. Get One product
// 4. Filter Product
// 5. Rate Product
import { CustomError } from "../../../errorHandler/errorHandler.js";
import ProductRepository from "../repository/product.repository.js"

export default class ProductController{
    constructor(){
        this.productRepo = new ProductRepository()
    }

    async add (req,res,next){
        try
        {
            const {name, description, price, category, stock} = req.body;
            if(req.type != "seller"){
                return next(new CustomError("Invalid request, Costumer are not allowed to add product", 400))
            }
            if (!name || !description || !price || !category || !stock){
                return next(new CustomError("Please Provide all necessary Details", 400))
            }
            const newProduct = await this.productRepo.add(req.body)
            res.status(201).json({success:true, product:newProduct})
        }catch(error){
            next(error) 
        }

    }

    async getAll (req,res,next){
        try{
            const allProducts = await this.productRepo.getAll();
            if(allProducts.length == 0){
                return next(new CustomError("No product Found", 404))
            }
            res.status(200).send(allProducts)
        }catch(err){
            next(err)
        }
    }

    async getOne (req,res,next){
        try{
            console.log(req.url)
            const id = req.params.productid
            if(!id){
                return next(CustomError("Please provide the product ID", 404))
            }
            const product = await this.productRepo.getOne(id);
            if(!product){
                return next(new CustomError("Product not Found", 404))
            }
            res.status(200).send(product)
        }catch(err){
            next(err)
        }
    }

    async filter(req,res,next){
        try{
            const products = await this.productRepo.filter(req.query)
            res.send(products)
        }catch(error){
            next(error)
        }

    }

    async rate (req,res,next){
        try{
            const userid = req.id
            const rating =  req.body.rating
            const productid = req.params.productid
            if(!productid || !rating){
                return next(new CustomError("Please provide rating and productid"), 400)
            }
            const result = await this.productRepo.rate(userid,productid,rating);
            res.status(200).send(result)
        }catch(err){
            next(err)
            }
    }
}