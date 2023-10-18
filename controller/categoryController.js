const { homeData,bolywoodData, holywoodData, fitnessData, foodData } = require("../categoryData")


const home=(req,res)=>{
    return res.send(homeData)

}
const bolywood=(req,res)=>{
    return res.send(bolywoodData)
}
const holywood=(req,res)=>{
    return res.send(holywoodDataolywoodData)
}
const fitness=(req,res)=>{
    return res.send(fitnessData)
}
const food=(req,res)=>{
    return res.send(foodData)
}
module.exports={home,bolywood,holywood,fitness,food}