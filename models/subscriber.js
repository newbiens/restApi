const mongoose=require('mongoose')

const subscriberSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    subscriberToBlog:{
        type:String,
        required:true
    },
    subscribeDate:{
        type:String,
        required:true,
        default:Date.now
    }
})

module.exports=mongoose.model('Subscriber',subscriberSchema)