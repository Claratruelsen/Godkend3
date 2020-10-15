// denne angiver porten, og hvilke routes/ endpoints der findes dertil
const express= require ("express");
const app=express();
const port= process.env.port || 3000;

const users = require("./controller/userController.js");
app.use("/users", users)

const interest= require("./controller/interestController.js");
app.use("/interest", interest)

const match= require("./controller/matchController.js");
app.use("/match", match)


//server aktiveres
app.listen(port, err =>{
    if (err)
{
    return console.log("ERROR", err);}
    console.log("listening on port ${port}");
});









