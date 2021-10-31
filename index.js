const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const path = require('path');
const fs = require('fs');
const servicesRouter = require('./Routers/ServicesRouter');
const deliveryInfoRouter = require('./Routers/deliveryInfoRouter');
dotenv.config();





const  uri = `mongodb://dailyCourier4281:${process.env.DATABASE_PASSWORD}@cluster0-shard-00-00.l9s4l.mongodb.net:27017,cluster0-shard-00-01.l9s4l.mongodb.net:27017,cluster0-shard-00-02.l9s4l.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-rb992z-shard-0&authSource=admin&retryWrites=true&w=majority`;



mongoose.connect(uri,{ useNewUrlParser: true,}, (err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log('connection successfull');
    }
    
})






app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true }))


const port = process.env.PORT || 5000;

const filePathid = ''


app.use('/services',servicesRouter);
app.use('/client/delivery',deliveryInfoRouter);

app.get('/',(req,res)=>{
res.send('Hello thank you')
})





app.get('/images/:id',  (req, res)=>{
    const imageFile= req.params.id;
  


fs.readFile(`C:/projects/daily-courier/daily-courier-server/publicaccess/${imageFile}`, (err, data)=>{
  

    if (err) {
        console.log(err);
    }
 
        res.end(data);
  

})


})

























app.listen(port, ()=>{
    console.log('server is running in port', port);
})








