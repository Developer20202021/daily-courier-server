const mongoose = require('mongoose');


const AddServiceSchema = new mongoose.Schema({

    serviceName:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    imgUrl:{
        type:String
    }

})


module.exports = AddServiceSchema;
