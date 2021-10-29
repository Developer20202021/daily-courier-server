const express = require('express');
const fakeData = require('../data ');
const AddServiceModel = require('../Models/AddServiceModel');

const servicesRouter = express.Router();





servicesRouter.post('/post-service',async (req, res)=>{

console.log(req.body);


const insertService = await AddServiceModel.insertMany(fakeData)
console.log(insertService);


})






servicesRouter.get('/all-services', async (req, res)=>{

    const allServices =await AddServiceModel.find({});


    if (allServices.length>0) {
        // console.log(allServices);
        res.status(200).json({allServices})
       
    }
    else{
        res.status(500).json({errMsg:"Server Side Error"})
    }





})


servicesRouter.get('/single-service/:id', async (req, res)=>{

    const {id}= req.params;
    console.log(id);

    const singleService = await AddServiceModel.find({_id:id});

    // console.log(singleService);
    res.json(singleService);
    res.end()



})



module.exports = servicesRouter;