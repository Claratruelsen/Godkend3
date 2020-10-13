const express= require ("express");
const app=express();
const port= process.env.port || 3000;
const user= require("./controller/userController");

app.use("/userController",user);
//use the userController.js file to handle endpoints 


app.get("/", (req,res)=>{

});

app
.route("/controller/userController/:userid")
.get((req, res)=>{})
.post((req, res)=>{});



//app.get("/user/:userId",(req, res)=>{
//handle root 
//res.send(req.params)
//req.params: {"userId":"1"}
//document.getElementById=user1); 
//});

app.listen(port, err =>{
    if (err)
{
    return console.log("ERROR", err);}
    console.log("listening on port ${port}");
});

# Godkend3
