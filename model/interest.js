class interest{
    constructor(personalInfo, interest){
        this.personalInfo=personalInfo;
        this.interest= interest;
        
    }
}

class personalInfo extends interest {
    constructor(firstName, lastName, age, gender){
        super(personalInfo);
        this.firstNme=firstName;
        this.lastName=lastName;
        this.age=age;
        this.gender=gender;
    }
}

class interest extends interest{
    constructor(faveoriteSong, ){
        super(interest);
        this.faveoriteSong=faveoriteSong;

    }
}



