const mongoose =require('mongoose')

const postSchema= new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required: true
    },
    comments:{
        type:Number,
        required:true,
        default:0

    },
    allComment: {
        type:[String]
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
},{timestamps:true})
module.exports=mongoose.model('Post',postSchema)