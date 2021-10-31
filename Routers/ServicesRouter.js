const express = require('express');
const fakeData = require('../data ');
const fs = require('fs');

const multer = require('multer');
const AddServiceModel = require('../Models/AddServiceModel');
const path = require('path');

const servicesRouter = express.Router();



const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../publicaccess'))
    },
    filename: function(req, file, callb){
        const fakeFileName = file.originalname;
        const extntion = path.extname(fakeFileName);


    
            const realFile = fakeFileName.split('.'&&' ');
            console.log(realFile);
            const date = Date.now();
            const getRealFile = realFile[0].toLocaleLowerCase()+'-'+date+extntion;
            callb(null, getRealFile);
       
       

    }

})


// upload file


    const upload = multer({
        storage:storage,
       
        fileFilter: (req, file, cb)=>{
      
                if (file.mimetype == 'image/jpeg' || file.mimetype =='image/jpg' || file.mimetype=='image/png' || file.mimetype == 'image/svg') {
                    cb(null, true)
                }
                else{
                    return cb(null, false);
                    
                 }
                
          
        }

    
        
    })


















servicesRouter.post('/post-service', async (req, res)=>{


//     const domainName = 'http://localhost:5000/images/'; 

//     const fileName = req.file.filename
//     console.log(fileName);

//    const addEventInfo = req.body;
//    addEventInfo.imgUrl = `${domainName}${fileName}`;

console.log(req.body);


const insertService = await AddServiceModel(req.body)
insertService.save(err=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log(insertService);
    }
})











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