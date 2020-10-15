const User= require("./user");

class freeUser extends User{
    constructor(userID, firstName, lastName, age, gender, interest, match, image, password){
        super(userID, firstName, lastName, age, gender, interest, match, image, password);
    }
}

module.exports=freeUser; 