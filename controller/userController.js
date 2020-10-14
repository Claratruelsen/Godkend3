const express = require ("express");
const router = express.Router();

router
.route("/")
.get((req, res)=>{

res.send("hej") // her skriver man hvad den skal sende afsted
// HVORDAN får jeg den til at hive informationen fra den user jeg øsnker? 
// hvordan får jeg dette dokument til at snakke sammen med min user.js fil
// hvordan får jeg den til at hive et specifikt ID? 



})
.post((req, res)=>{});

module.exports=router;


