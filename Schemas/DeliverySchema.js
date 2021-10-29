const mongoose = require('mongoose');

const DeliveryInfoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    serviceType:{
        type:String,
        required:true
    },
    deliveryProductName:{
        type:String,
        required:true
    },
    deliveryProductWeight:{
        type:String,
        required:true
    },
    deliveryCost:{
        type:String,
        required:true
    },
    addressFrom:{
        type:String,
        required:true
    },
    addressTo:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        
    },
    status:{
        type:String,
        default:'Pending'
    }









})


module.exports=DeliveryInfoSchema;