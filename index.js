// const http=require('http')
// const data = require('./data')


// const sendData=JSON.stringify(data)
// const app=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.write('<h2>What is nodeJs</h2>')
//         res.write('<p>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser</p>')
//         res.end()
//     }
//     else if(req.url==='/about' && req.method=="POST"){ 
//         res.write(sendData)
//         res.end()
//     }
//     else{
//         res.write("404 page not found")
//         res.end()
//     }
    
// })
// app.listen(5000,()=>{
//     console.log("server is running on port 5000")
// })