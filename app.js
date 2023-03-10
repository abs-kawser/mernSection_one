const express=require('express');
const router = require('./src/routes/api');
const app=new express();

// security checck middleware first 
const rateLimit= require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')
const bodyParser = require('body-parser')
const mongoose= require('mongoose');

//Security Middleware Implement
// parse application/json
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(bodyParser.json())









//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter)


//Mongo-Db database connection 

let URL="mongodb://127.0.0.1:27017/Schools"
//let URL="mongodb://localhost:27017"
let OPTION={user:'',pass:''}
mongoose.set("strictQuery", false);
mongoose.connect(URL,OPTION,(err)=>{
   if(err){
    console.log(err);
   }else{
    console.log("Connection success");
   }
})



// Mother Route // Routing 

app.use("/api/v1",router);

// undefine route
app.use("*",(req,res)=>{
    res.status(404).json({ status:"fail",data:"not found"})
})

module.exports=app







