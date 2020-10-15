const img= require("../model/img")

let imgArray = [] 
var i1 = new img("PNG", "user1.png", "190 x 199");
var i2 = new img("PNG", "user2.png", "271 × 234");
var i3 = new img("PNG", "user3.png", "370 × 464");
var i4 = new img("PNG", "user4.png", "239 × 244");
var i5 = new img("PNG", "user5.png", "314 × 490");
imgArray=[i1, i2, i3, i4, i5];

module.exports = imgArray

