// denne angiver porten, og hvilke routes/ endpoints der findes dertil
const express= require ("express");
const app=express();
const port= process.env.port || 3000;

const users = require("./controller/userController.js");
app.get("/users", (req, res) => {
    res.end(JSON.stringify(users))
});

const interest= require("./controller/interestController.js");
app.get("/interest", (req, res) => {
    res.end(JSON.stringify(interest))
});

const match= require("./controller/matchController.js");
app.create("/match", (req, res) => { //create er en del af post
    res.JSON("message", "You have created a new match")
});


//server aktiveres
app.listen(port, err =>{
    if (err)
{
    return console.log("ERROR", err);}
    console.log("listening on port ${port}");
});









