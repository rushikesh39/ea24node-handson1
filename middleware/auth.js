const globalMiddleware=(req,res,next)=>{
    console.log('middleware call')
    const age=19
    if(age>18){
        next()
    }
    else{
        console.log("user not allowed")
      return  res.send("user not allowed")
    }
}
const specificMiddleware=(req,res,next)=>{
    console.log("specific middleware call")
    const age=17
    if(age>18){
        next()
    }
    else{
        console.log("user not allowed")
      return  res.send("user not allowed")
    }
}

module.exports={globalMiddleware,specificMiddleware}
