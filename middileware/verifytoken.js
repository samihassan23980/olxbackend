const jwt = require("jsonwebtoken");
const secret = require("../config/jwt");

function verificationToken(req, res, next) {

    try{
        const token = req.headers.authorization.slice(7);
        console.log(token)
        jwt.verify(token, secret);
        console.log("verify hogaya");

        next()
    }
    catch(e){
        res.send({
            message : 'bhai phly admin id se login hokar aja teri mehrbani'
        })
    }

}

module.exports = verificationToken
