const match= require("../model/match");

let userMatchArray = [] 
var m1 = new match("matches with user 2");
var m2 = new match("matches with user 3");
var m3 = new match("matches with user 4");
var m4 = new match("matches with user 5");
var m5 = new match("matches with user 1");

userMatchArray=[m1, m2, m3, m4, m5];

module.exports = userMatchArray
