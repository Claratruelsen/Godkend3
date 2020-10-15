const interest= require("../model/interest")

let userInterestArray = [] 
var user1 = new interest("hetro", "fishing, cooking, working out");
var user2 = new interest("bisexual", "makeup, fashion, yoga");
var user3 = new interest("homosexual", "walking, listening til music, working out");
var user4 = new interest("hetro", "cooking, being with friends");
var user5 = new interest("homosexual", "makeup, working out, reading"); 
userInterestArray=[user1, user2, user3, user4, user5];

module.exports = userInterestArray
