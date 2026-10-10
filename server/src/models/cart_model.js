import mongoose from "mongoose"
import bcrypt from "bcrypt"

const cardSchema =new mongoose.Schema({
    userId:{type:mongoose.Schema.type.objectId,ref:'user'},
    productId:{type:mongoose.Schema.type.objectId,ref:'product'},
    quantity:{type:Number,required:true},
    totalPrice:{type:Number,required:true},
    orderDate:{type:Date,default:Date.now},
    status:{type:String,enum:["pending","shipped","delivered"],default:"pending"},

},
      {timestamps:true}
)
export const card_model=momgoose.model("card",cardSchema);