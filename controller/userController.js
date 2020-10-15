const users = require("./hardUser");

function userController(req, res) {
    res.end(JSON.stringify(users))
};

module.exports=userController;


   
// her skriver man hvad den skal sende afsted
// HVORDAN får jeg den til at hive informationen fra den user jeg øsnker? 
// hvordan får jeg dette dokument til at snakke sammen med min user.js fil
// hvordan får jeg den til at hive et specifikt ID? 



