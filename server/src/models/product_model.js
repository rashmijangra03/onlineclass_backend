import mongoose from "mongoose"
import bcrypt from "bcrypt"

const productSchema =new mongoose.Schema({
    productImgs:{type:Array,required:true},
    productName:{type:string,required:true},
    productDescription:{type:string,required:true},
    bankOffer:[

    ],
    quantity:{type:Number,required:true,default:10},
    info:{},
    category:{type:string,enum:["mobile","laptop",'tab',"mencloth"]},
    commentId:[{type:mongoose.Schema.type.objectId,ref:"comment"}],


        
    

    // userId:{type:mongoose.Schema.type.objectId,ref:'user'},
    // poroductId:{type:mongoose.Schema.type.objectId,ref:'product'},
    // quantity:{type:Number,required:true},
    // totalPrice:{type:Number,required:true},
    // orderDate:{type:Date,default:Date.now},
    // status:{type:String,enum:["pending","shipped","delivered"],default:"pending"},
    // orderId:[{type:mongoose.Schema.type.objectId,ref:"order"}],
    // commentId:[{type:mongoose.Schema.type.objectId,ref:"comment"}]

},
      {timestamps:true}
)
export const product_model=mongoose.model("productSchema",orderSchema);