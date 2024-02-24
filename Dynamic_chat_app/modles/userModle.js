const mongoose= require('mongoose');

const userschema = new mongoose.schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    is_online:{
        type:String,
        required:'0'
    }
},
{ timestamps:true}

);
module.exports=mongoose.model('user', userschema);