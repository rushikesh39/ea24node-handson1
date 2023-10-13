const express=require('express')
const app=express()
const userRoutes=require("./routes/userRoutes")


app.use("api/",userRoutes)

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})