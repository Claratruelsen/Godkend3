const match= require("../model/match");

let userMatchArray = [] 
var m1 = new match("user 1 matches with user 2");
var m2 = new match("user 2 matches with user 3");
var m3 = new match("user 3 matches with user 4");
var m4 = new match("user 4 matches with user 5");
var m5 = new match("user 5 matches with user 1");

userMatchArray=[m1, m2, m3, m4, m5];

module.exports = userMatchArray
