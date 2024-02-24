const mongoose= require('mongoose');

const userschema = new mongoose.schema({
   sender_id:{
    type:mongoose.Schema.Types.ObjectId,
    Ref:'user'
   },
   receiver_id:{
    type:mongoose.Schema.Types.ObjectId,
    Ref:'user'
   },
   Message:{
    type:String,
    Required:true
   }
},
{ timestamps:true}

);
module.exports=mongoose.model('user', userschema);