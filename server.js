import 'dotenv/config'
import express from "express"
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { ErrorMiddleware } from './src/errorHandler/errorHandler.js';
import loggerMiddeware from './src/middlewares/logger.middleware.js';
import userRouter from './src/features/users/routes/user.routes.js';
import productRouter from './src/features/products/routes/product.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import cartRouter from './src/features/cart/routes/cart.routes.js';
import getClient from './config/mongodb.js';

// Setting the http server using express library
const app = express();

//cookies parser
app.use(cookieParser());

// parsing the data to convert it in readable format
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

// Logger middleware to log Request
app.use(loggerMiddeware)

// Routes

//welcome Route
app.get("/", (req,res)=>{
    res.send("welcome to NodeJs Application")
})

// User Route
app.use("/api/user",userRouter);

// Product Route
app.use("/api/product",jwtAuth, productRouter);

// Cart Route
app.use("/api/cart",jwtAuth, cartRouter);

// Error Handling
app.use(ErrorMiddleware)

// API middleware
app.use((req, res)=>{
    res.status(404).send("API not found. Please check our documentation for more information at localhost:1000/api-docs")
  });

app.listen(process.env.PORT_NO, ()=>{
    console.log("Application running on port 1000")
    getClient();
})
