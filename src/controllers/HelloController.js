
//create controller
exports.HelloGet=(req,res)=>{
res.status(200).json({
    "status":"Hi It's success",
    Name:"Kawser get"
})
}


exports.HelloPost=(req,res)=>{
    res.status(201).json({
        "status":"Hi It's success post ",
        Name:"Kawser post"
    })
    }



// const express =require();
// const HelloController=require('../controllers/HelloController')
// const router=express.Router();

// router.get("/hello",HelloController.Hello)
