const express=require('express')
const app=express()
const userRoutes=require("./routes/userRoutes")
const category=require('./routes/categoryRoutes')
const cors=require('cors')
const { globalMiddleware } = require('./middleware/auth')


//global middleware
// app.use(globalMiddleware)
app.use(cors())
app.use('/category',category)
app.use("/api",userRoutes)

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})
//specific middleware applied on userRoutes.js