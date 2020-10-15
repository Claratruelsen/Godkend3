// denne angiver porten, og hvilke routes/ endpoints der findes dertil
const express= require ("express");
const app=express();
const port= process.env.port || 3000;

//const users= require("./controller/userController.js");
//app.use("/userController",users); // her vil jeg også gerne kunne finde data fra en bestemt userid... ? 
//use the userController.js file to handle endpoints 
//app.get("/", (req,res)=>{

//});


//henter controller fra sti
const userController = require('./controller/userController')
//const protectedController = require('./controller/Protectedcontroller')
//const loginController = require('./controller/loginController')

//henter middleware
//const ensureToken = require('./Middleware/ensureToken')
//read endpoint på routen '/'
server.get('/', userController)

//server.get('/protected', ensureToken,  protectedController)


//server.post('/login', loginController)


//const interest= require("./controller/interestController.js");
//app.use("/interestController",interest);

//app.get("/", (req,res)=>{

//});

//const match= require("./controller/matchController.js");
//app.use("/matchController",match);

//app.get("/", (req,res)=>{

//});

//server aktiveres
app.listen(port, err =>{
    if (err)
{
    return console.log("ERROR", err);}
    console.log("listening on port ${port}");
});




