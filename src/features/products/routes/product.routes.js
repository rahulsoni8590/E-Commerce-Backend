import express from "express";
import ProductController from "../controller/product.controller.js";
import uploadFile from "../../../middlewares/fileupload.middleware.js";

const productRouter = express.Router();
const productController = new ProductController()

// Note:: As in Get one product the route is /:id which is the shortest so the case may occur that when we call the filter or any short route it may not reach to that so that is why we are writing filter and rate product at top

// 4. Filter Product
productRouter.get("/filter-product", (req,res,next)=>{
    productController.filter(req,res,next)
})

// 5. Rate Product
productRouter.post("/rate-product/:productid", (req,res,next)=>{
    productController.rate(req,res,next)
})

// 1. Add Product
productRouter.post("/add-product",uploadFile.single("image"), (req,res,next)=>{
    productController.add(req,res,next)
})

// 2. Get all Product
productRouter.get("/all-product", (req,res,next)=>{
    productController.getAll(req,res,next)
})

// 3. Get One product
productRouter.get("/:productid", (req,res,next)=>{
    productController.getOne(req,res,next)
})


export default productRouter;