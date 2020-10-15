const User= require("./model/user");
const paymentUser= require("./model/paymentUser")
const freeUser= require("./model/freeUser")

// hvorfor virker dette lort ikke ? 
//var img1= document.createElement("img");
//img1.src="img/user1.png";
//var img2= document.createElement("img");
//img2.src="img/user2.png";
//var img3= document.createElement("img");
//img3.src="img/user3.png";
//var img4= document.createElement("img");
//img4.src="img/user4.png";
//var img5= document.createElement("img");
//img5.src="img/user5.png";

//let userArray = [] 
let user1= new paymentUser("5555 7777 1212 6565", "07/23", "567", user1, "Lars", "Larsen", 24, "male", user1.interest, "match", "img1", "psw1");
let user2= new freeUser(user2, "Carlos", "Christensen", 26, "male", user2.interest, "match", "img2", "psw2");
let user3= new freeUser(user3, "Amalie", "Svendsen", 30, "female", user3.interest, "match", "img3", "psw3");
let user4= new paymentUser("**** **** **** ****", "03/25", "***", user4, "Nina", "Marcker", 23, "female", user4.interest, "match", "img4", "psw4");
let user5= new freeUser(user5, "Mads", "Sigurdson", 30, "male", user5.interest, "match", "img5", "psw5");
let userArray=[user1, user2, user3, user4, user5];

module.exports = userArray;

// kan man bruge GetUserId? eller skal man bare bruge id= eller userId= ...??
// hvad skal jeg skrive under match og image.....
// kan jeg godt bare skrive user1.interest eller skal inetrest slet ikke være en atribut i denne class når den har eget endpoint? 

