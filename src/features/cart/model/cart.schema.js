import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
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
  
const cartModel = mongoose.model("Cart", cartSchema);

export default cartModel;
