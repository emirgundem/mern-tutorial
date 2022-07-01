const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


//@desc   Register new user
//@route  POST /api/users
//@access Public

const registerUser = asyncHandler(async(req,res) => {
      const {name,email,password} = req.body
      if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
      }

      const userExits = await User.findOne({email})

      if(userExits){
        res.status(400)
        throw new Error('User already exits')
      }

      //Hash Password 
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password,salt)

      //Create user
      const user = await User.create({
        name,
        email,
        password : hashedPassword
      })

      if(user) {
        res.status(201)
        
      }


      res.json({message:'Register Success'})
})



//@desc   Authenticate a user
//@route  POST /api/users/login
//@access Public

const loginUser = asyncHandler(async(req,res) => {
    res.json({message:'Login Success'})
})


//@desc  Get user data
//@route GET /api/users/getuser
//@access Public

const getUser = asyncHandler(async(req,res) => {
    res.json({message:'User Data'})
}) 





module.exports = {
    registerUser,
    loginUser,
    getUser
}
