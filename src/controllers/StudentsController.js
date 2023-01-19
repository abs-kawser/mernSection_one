const e = require('express');
const { updateOne } = require('../models/StudentsModel');
const StudentsModel = require('../models/StudentsModel')


//createData in mongoes way 
exports.InsertStudents = (req, res) => {
    let reqBody = req.body;

    StudentsModel.create(reqBody, (err, data) => {
        if (err) {

            res.status(400).json({
                "status": "Fail",
                data: err

            })

        } else {

            res.status(201).json({
                "status": "success",
                data: data

            })
        }
    })
}

//Red data 
exports.ReadStudent = (req, res) => {

    let Query = {};
    let Projection = "Name Roll Class Remarks"

    StudentsModel.find(Query, Projection, (err, data) => {
        if (err) {

            res.status(400).json({
                "status": "Fail",
                data: err
            })

        } else {
            res.status(201).json({
                "status": "success",
                data: data

            })
        }
    })
}

//update data 
exports.updateStudent=(req,res)=>{
    let id= req.params.id;
    //let Query={_id:id}
    let reqBody = req.body;
 
   StudentsModel.updateOne({_id:req.params.id},reqBody, (err,data)=>{
        if (err) {

            res.status(400).json({
                "status": "Fail",
                data: err
            })

        } else {
            res.status(200).json({
                "status": "success",
                data: data

            })
        }
    }) 
}


// Delete 
exports.DeleteStudent=(req,res)=>{
    let id=req.params.id;
    let QUERY={_id:id}
    StudentsModel.remove(QUERY,(err,data)=>{
        if(err){
            res.status(400).json({status:"fail",data:err})
        }
        else {
            res.status(200).json({status:"success",data:data})
        }
    })

}









// exports.updateStudent=(req,res)=>{
//     let ReqBody=req.body
    
//     StudentsModel.updateOne({_id:req.params.id}, ReqBody,{$set:true}, (err,data)=>{
//         if(err){
//             res.status(400).json({status:'fail', datat:data})
//         }else{
//             res.status(200).json({status:'success', datat:data})
//         }
//     })
// }