import mongoose from "mongoose";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: [3, "Length must be at least 3 characters"],
      maxlength: [100, "Length must be at most 100 characters"],
      required:[true, "Name is required"]
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        "Please enter a valid email address"
      ]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    type: {
      type: String,
      enum: ["customer", "seller"],
      default:"customer",
      required:[true, "Type is required"]
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [18, "Age must be at least 0"],
      max: [100, "Age must be at most 100"]
    }
  });
  
userSchema.pre("save", async function(next){
  try{
    this.password = await bcrypt.hash(this.password, 10);
    next()
  }catch(err){
    return next(err)
  }
})

userSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.getJWTToken = function(){
  return JWT.sign(
      {id:this._id, type:this.type}, 
      process.env.JWT_SECRET_KEY, 
      {expiresIn:process.env.JWT_Expire}
    )
}

// // JWT Token
// userSchema.methods.getJWTToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_Secret, {
//     expiresIn: process.env.JWT_Expire,
//   });
// };
// // user password compare
// userSchema.methods.comparePassword = async function (password) {
//   try{
//     return await bcrypt.compare(password, this.password);
//   }catch(err){
//     console.log(err)
//   }
// };


const userModel = mongoose.model("User", userSchema);

export default userModel;
