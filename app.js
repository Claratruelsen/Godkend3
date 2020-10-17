// denne angiver porten, og hvilke routes/ endpoints der findes dertil
const express= require ("express");
const app=express();
const port= process.env.port || 3001;


// mine GET requests CRUD: R - read : 
const users = require("./controller/userController.js");
app.use("/users", users)

const interest= require("./controller/interestController.js");
app.use("/interests", interest)

const match= require("./controller/matchController.js");
app.use("/matches", match)

// andre CRUD endpoints - dog bare med beskeder frem for virkelig at kunne noget
app.delete("/deleteUser", (req, res)=>{
    res.json({message: "You have deleted a user"})
});
//crud : U - update= put
app.put("/updateInterest", (req, res)=>{
    res.json({message:"You have updates your interests" })
});
// crud: C - create
app.post("/createNewUser", (req, res)=>{
    res.json({message: "You have created a new user"})
}); 


//server aktiveres
app.listen(port, err =>{
    if (err)
{
    return console.log("ERROR", err);}
    console.log("listening on port ${port}");
});








