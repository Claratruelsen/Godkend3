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
//eksporter user
module.exports = User;

