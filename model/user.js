class User{
        constructor(userID, firstName, lastName, age, gender, interest, match, image){ 
            this.userID=userID;
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
            this.gender=gender;
            this.interest=interest;
            this.match=match;
            this.image=image;
      
            // skal man opgive hvad brugerens password osv er? 
            //skal man lave en loginfunction? tokin= adgang til den info om personen
            //skal interest, match, img fjernes? skal img være sin egen klasse? eller hvordan sætter man det ind? 
        }
    }
 
//GetUserId() ????

class paymentUser extends User {
    constructor(creditCardNumber, creditCardExpiration, creditCardCVC,  userID, firstName, lastName, age, gender, interest, match, image){
        super(userID, firstName, lastName, age, gender, interest, match, image);
            this.creditCardNumber=creditCardNumber;
            this.creditCardExpiration=creditCardExpiration;
            this.creditCardCVC=creditCardCVC;
            // skal man lave andre funktioner, så de kan se fx antallet af macthes....? 
        }     
}
// skal creditcard være en metode eller skal man bare lave attributter som er cardnumber, cvc osv?
// hvordam får jeg disse oplysningen til at være hemmelige? - alternativ kan jeg skrive det som **** **** **** ****
class freeUser extends User{
    constructor(userID, firstName, lastName, age, gender, interest, match, image){
        super(userID, firstName, lastName, age, gender, interest, match, image);
    }
}

class interest{
    constructor(sexuality, hobbies){
        this.sexuality=sexuality;
        this.hobbies=hobbies;    
    }
}

var GetUserId= user1 = new interest("hetro", "fishing, cooking, working out");
var GetUserId= user2 = new interest("bisexual", "makeup, fashion, yoga");
var GetUserId= user3 = new interest("homosexual", "walking, listening til music, working out");
var GetUserId= user4 = new interest("hetro", "cooking, being with friends");
var GetUserId= user5 = new interest("homosexual", "makeup, working out, reading"); 

// kan man bruge GetUserId? eller skal man bare bruge id= eller userId= ...??
// hvad skal jeg skrive under match og image.....
// kan jeg godt bare skrive user1.interest eller skal inetrest slet ikke være en atribut i denne class når den har eget endpoint? 
var GetUserId= user1 = new paymentUser("5555 7777 1212 6565", "07/23", "567", user1, "Lars", "Larsen", 24, "male", user1.interest, "match", "image");
var GetUserId= user2 = new freeUser(user2, "Carlos", "Christensen", 26, "male", user2.interest, "match", "image");
var GetUserId= user3= new freeUser(user3, "Amalie", "Svendsen", 30, "female", user3.interest, "match", "image");
var GetUserId= user4= new paymentUser("**** **** **** ****", "03/25", "555", user4, "Nina", "Marcker", 23, "female", user4.interest, "match", "image");
var GetUserId= user5=new freeUser(user5, "Mads", "Sigurdson", 30, "male", user5.interest, "match", "image"); 

