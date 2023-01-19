const express=require('express');
const router=express.Router();
const helloController=require("../controllers/HelloController");
const StudentsController=require("../controllers/StudentsController");









// routing start
router.get("/hello-get",helloController.HelloGet)
router.post("/hello-post",helloController.HelloPost)


// Mongose 
router.post("/InsertStudents",StudentsController.InsertStudents)
router.get("/ReadStudent",StudentsController.ReadStudent)
router.post("/updateStudent/:id",StudentsController.updateStudent)
router.post("/DeleteStudent/:id",StudentsController.DeleteStudent)




module.exports=router