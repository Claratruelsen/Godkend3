const User= require("./user");

class paymentUser extends User {
    constructor(creditCardNumber, creditCardExpiration, creditCardCVC,  userID, firstName, lastName, age, gender, interest, match, image, password){
        super(userID, firstName, lastName, age, gender, interest, match, image, password);
            this.creditCardNumber=creditCardNumber;
            this.creditCardExpiration=creditCardExpiration;
            this.creditCardCVC=creditCardCVC;
            // skal man lave andre funktioner, så de kan se fx antallet af macthes....? 
        }     
}

module.exports=paymentUser; 
// skal creditcard være en metode eller skal man bare lave attributter som er cardnumber, cvc osv?
// hvordam får jeg disse oplysningen til at være hemmelige? - alternativ kan jeg skrive det som **** **** **** ****