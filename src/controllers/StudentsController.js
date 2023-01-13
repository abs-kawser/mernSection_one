const e = require('express');
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