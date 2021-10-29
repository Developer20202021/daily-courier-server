const express = require('express');
const deliveryModal = require('../Models/DeliveryModal');
const deliveryInfoRouter = express.Router();








deliveryInfoRouter.post('/delivery-info',async (req,res)=>{
    // console.log(req.body);

const deliveryInfoAdd = await deliveryModal(req.body)

deliveryInfoAdd.save(err=>{
    if (err) {
        console.log(err);
        res.status(400).json({errMsg:"Please Fill up the Full Form"})
    }
    else{
        res.status(200).json({sucessMsg:"Your Order Successfully Submitted"})
        console.log(deliveryInfoAdd);
    }
})






})



deliveryInfoRouter.get('/all-delivery-info', async (req,res)=>{


    const getDeliveryAllInfo = await deliveryModal.find({});

    if (getDeliveryAllInfo.length>0) {
        console.log(getDeliveryAllInfo);
        res.status(200).json(getDeliveryAllInfo);
        
    }
    else{
        res.status(500).json({err:"No Results"})
        console.log(getDeliveryAllInfo);
    }







})


deliveryInfoRouter.put('/delevery-info-delete/:id', async (req, res)=>{
    const {id} = req.params;
    const deleteInfo = await deliveryModal.findOneAndUpdate({_id:id}, {$set:{
        status:'Canceled'
    }})


    console.log(deleteInfo);
})




deliveryInfoRouter.put('/delevery-info-approve/:id',async (req, res)=>{

    const {id} = req.params;

    const updateInfo = await deliveryModal.findOneAndUpdate({_id:id}, {$set:{
        status:'Aproved'
    }})






    console.log(updateInfo);
})




















module.exports = deliveryInfoRouter;