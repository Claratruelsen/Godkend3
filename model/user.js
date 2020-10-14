class User{
        constructor(userID, firstName, lastName, age, gender, interest, match, image){ //skal interest, match, img fjernes? skal img være sin egen klasse? eller hvordan sætter man det ind? 
            this.userID=userID;
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
            this.gender=gender;
            this.interest=interest;
            this.match=match;
            this.image=image;
            
        }
    }
 
//GetUserId()

class paymentUser extends User {
    constructor(creditCard, userID, firstName, lastName, age, gender, interest, match, image){
        super(userID, firstName, lastName, age, gender, interest, match, image);
            this.creditCard=creditCard;
        }     
}
// skal creditcard være en metode eller skal man bare lave attributter som er cardnumber, cvc osv?

class freeUser extends User{
    constructor(userID, firstName, lastName, age, gender, interest, match, image){
        super(userID, firstName, lastName, age, gender, interest, match, image);
    }
}

var id= user1 = new paymentUser();

var id= user2= new freeUser();

// skal man opgive hvad brugerens password osv er? 
//skal man lave en loginfunction? tokin= adgang til den info om personen