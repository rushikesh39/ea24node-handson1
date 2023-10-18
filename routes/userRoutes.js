const userRoutes=require('express').Router()
const data=require("../data")
const { specificMiddleware } = require('../middleware/auth')
userRoutes.post('/register',specificMiddleware,(req,res)=>{
    res.send("user is register")
})
userRoutes.post('/login',(req,res)=>{
    res.send("user Login Successfully")
})
userRoutes.get('/logout',(req,res)=>{
    res.send("user is logout")
})
userRoutes.get('/data',(req,res)=>{
    res.send(data)
})
module.exports=userRoutes