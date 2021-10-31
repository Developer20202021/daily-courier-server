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
    res.status(200).json({msg:'ok'})
    console.log(deleteInfo);


  
})


deliveryInfoRouter.delete('/delevery-info-delete/:id', async (req, res)=>{
    const {id} = req.params;
    console.log(id);
    const deleteInfo = await deliveryModal.deleteOne({_id:id})

    res.status(200).json({msg:'ok'})


    console.log(deleteInfo);
})




deliveryInfoRouter.put('/delevery-info-approve/:id',async (req, res)=>{

    const {id} = req.params;

    const updateInfo = await deliveryModal.findOneAndUpdate({_id:id}, {$set:{
        status:'Aproved'
    }})

    res.status(200).json({msg:'ok'})





  
})






deliveryInfoRouter.get('/single-client-order',  async (req, res)=>{

    const clientEmail = req.query.email;

    const clientOrderInfo = await deliveryModal.find({email:clientEmail})
    if (clientOrderInfo.length>0) {
        res.status(200).json(clientOrderInfo)
        
    }
    else{
        res.status(400).json({errMsg:"Server Side Error"})
    }

    // console.log(clientOrderInfo);
   







})



















module.exports = deliveryInfoRouter;