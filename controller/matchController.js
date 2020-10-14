const express = require ("express");
const router = express.Router();

router
.route("/")
.get((req, res)=>{

res.send("hej") // her skriver man hvad den skal sende afsted

})
.post((req, res)=>{});

module.exports=router;