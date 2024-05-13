import mongoose from "mongoose";

const getClient = async function(){
    try{
        await mongoose.connect(process.env.MONGO_DB)
        console.log ("Mongodb is connected")
    }catch(error){
        console.log(`MongoDB Connection failed ${error}`)
    } 
}

export default getClient;