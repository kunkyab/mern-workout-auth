const User = require('../models/userModel')






//login user

const loginUser = async(req,res)=>{
  res.json({mesg:"login user"})

}




//signup user

const signUpUser = async(req,res)=>{
  res.json({mesg:"signup user"})

}


module.exports = {loginUser,signUpUser}