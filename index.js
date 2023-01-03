const app=require("./app");
const dotenv=require("dotenv")
dotenv.config({path:"./config.env"})

// use .dotenvPackage
app.listen(process.env.RUNNING_PORT,function() {

     console.log("This is from env "+ process.env.RUNNING_PORT)
});




