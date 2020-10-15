const paymentUser= require("../model/paymentUser.js");
const freeUser= require("../model/freeUser.js");
const interest= require("./hardInterest.js");
const match= require("./hardMatch.js");
const img= require("./hardIMG");

//let userArray = [] 
let user1= new paymentUser("5555 7777 1212 6565", "07/23", "567", "Lars", "Larsen", 24, "male", interest[0], match[0], img[0], "psw1");
let user2= new freeUser("Carlos", "Christensen", 26, "male", interest[1], match[1], img[1], "psw2");
let user3= new freeUser("Amalie", "Svendsen", 30, "female", interest[2], match[2], img[2], "psw3");
let user4= new paymentUser("**** **** **** ****", "03/25", "***", "Nina", "Marcker", 23, "female", interest[3], match[3], img[3], "psw4");
let user5= new freeUser("Mads", "Sigurdson", 30, "male", interest[4], match[4], img[4], "psw5");
let userArray=[user1, user2, user3, user4, user5];

module.exports = userArray;

console.log(userArray);
