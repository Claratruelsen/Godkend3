const match = require("./hardMatch.js");

function matchController(req, res) {
    res.end(JSON.stringify(match))
};

module.exports=matchController;

/*
const express = require ("express");
const router = express.Router();

router
.route("/")
.get((req, res)=>{

res.send("hej") // her skriver man hvad den skal sende afsted

})
.post((req, res)=>{});

module.exports=router;
*/
