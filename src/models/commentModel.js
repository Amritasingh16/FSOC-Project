const mongoose= require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const commentSchema= new mongoose.Schema({
    postId:{
        type:ObjectId,
        ref:"Post",
        required:true
    },
    userId:{
        type:ObjectId,
        ref:"User",
        required:true
    },
    comment:{
        type:String
    },
    reply:{
        type:[String]
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

},{timestamps:true})
module.exports= mongoose.model("Comment",commentSchema)