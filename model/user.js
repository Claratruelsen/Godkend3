class User{
        constructor(userID, firstName, lastName, age, gender, interest, match, image, password){ 
            this.userID=userID;
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
            this.gender=gender;
            this.interest=interest;
            this.match=match;
            this.image=image;
            this.password=password;
      
            // skal man opgive hvad brugerens password osv er? 
            //skal man lave en loginfunction? tokin= adgang til den info om personen
            //skal interest, match, img fjernes? skal img være sin egen klasse? eller hvordan sætter man det ind? 
        }
    }
 

class paymentUser extends User {
    constructor(creditCardNumber, creditCardExpiration, creditCardCVC,  userID, firstName, lastName, age, gender, interest, match, image, password){
        super(userID, firstName, lastName, age, gender, interest, match, image, password);
            this.creditCardNumber=creditCardNumber;
            this.creditCardExpiration=creditCardExpiration;
            this.creditCardCVC=creditCardCVC;
            // skal man lave andre funktioner, så de kan se fx antallet af macthes....? 
        }     
}
// skal creditcard være en metode eller skal man bare lave attributter som er cardnumber, cvc osv?
// hvordam får jeg disse oplysningen til at være hemmelige? - alternativ kan jeg skrive det som **** **** **** ****
class freeUser extends User{
    constructor(userID, firstName, lastName, age, gender, interest, match, image, password){
        super(userID, firstName, lastName, age, gender, interest, match, image, password);
    }
}

//eksporter user
module.exports = User, paymentUser, freeUser;


