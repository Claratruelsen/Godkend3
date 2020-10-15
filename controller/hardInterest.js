const interest= require("../model/interest")

let userInterestArray = [] 
var i1 = new interest("hetro", "fishing, cooking, working out");
var i2 = new interest("bisexual", "makeup, fashion, yoga");
var i3 = new interest("homosexual", "walking, listening til music, working out");
var i4 = new interest("hetro", "cooking, being with friends");
var i5 = new interest("homosexual", "makeup, working out, reading"); 
userInterestArray=[i1, i2, i3, i4, i5];

module.exports = userInterestArray
