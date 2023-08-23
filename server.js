const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.listen(3000,()=>{
    console.log("the server started at port no:3000");
})
app.get('/',(req,res)=>{
    res.send("hello bois");
})
app.post('/car',(req,res)=>{
    const {car,brand} =req.body;
    console.log(car);
    console.log(brand);
    res.send("car is successfully submitted");
})
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/car',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("Connection successful")})
.catch((error)=>{console.log(`Received an error😣- ${error}`)});