const users = require("./hardUser");

function userController(req, res) {
    res.end(JSON.stringify(users))
};

module.exports=userController;



/*
const users = require("./hardUser");
const express = require("express");
const router = express.Router();


router.get ("/", function (req, res) {
    res.end(JSON.stringify(users))
});


module.exports=users;



*/

