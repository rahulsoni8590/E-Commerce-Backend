import OrderRepository from "../repository/order.repository.js"

export default class OrderController{
    constructor(){
        this.orderRepo = new OrderRepository()
    }

    async placeOrder(req,res,next){
        try{
            const userid = req.id
            const resp = await this.orderRepo.placeOrder(userid);
            if(resp){
                res.status(200).send(resp)
            }else{
                res.status(400).send("Failed to create order")
            }
        }catch(error){
            next(error)
        }
    }
    
}