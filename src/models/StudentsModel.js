const mongoose= require('mongoose');


const DataSchema=mongoose.Schema({
Name:{type:String},
Roll:String,
Class:String,
Remarks:{type:String,default:"no remarks"} ,
//Remarks:String,

},{versionKey:false})
//change version key 


const StudentsModel=mongoose.model('students',DataSchema);
module.exports=StudentsModel