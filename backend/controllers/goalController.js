const asyncHandler = require('express-async-handler');


const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({mesage: 'Get Goals'})
})



const setGoal = asyncHandler(async(req,res) =>{
    if(!req.body.text){
      res.status(400)
      throw new Error('Please add a text file')
    }
    res.status(200).json({mesage: 'Set Goals'})
})


const updateGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: `updated goals ${req.params.id}`})
})


const deleteGoal = asyncHandler(async(req,res) => {
    res.status(200).json({message: `deleted goals ${req.params.id}`})
})




module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}


