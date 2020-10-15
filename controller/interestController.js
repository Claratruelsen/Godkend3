const interets = require("./hardInterest");

function interestController(req, res) {
    res.end(JSON.stringify(interest))
};

module.exports=interestController;

