const User= require("./user");

class freeUser extends User{
    constructor(firstName, lastName, age, gender, interest, match, image, password){
        super(firstName, lastName, age, gender, interest, match, image, password);
    }
}

module.exports=freeUser; 