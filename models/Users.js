const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const secret = require("../config/jwt")


const UsersSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
    min: 4,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  token : String,
});

UsersSchema.pre("save", function (next) {


  
  const user = this;

  if(!user.token){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash
  }


  next()
});


UsersSchema.methods.comparePaswword = function (password){

  const user = this // db user data hoga is this me

                    //  fronetendPassword ,db password 
  return bcrypt.compareSync(password , user.password)

}

UsersSchema.methods.generateToken = function (){
  const user = this

  const token = jwt.sign({_id : user.id}, secret )

  return token
}

const Users = mongoose.model("users", UsersSchema);

module.exports = Users;
