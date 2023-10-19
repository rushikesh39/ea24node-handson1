const { homeData,bolywoodData, holywoodData, fitnessData, foodData, technologyData } = require("../categoryData")


const home=(req,res)=>{
    return res.send(homeData)

}
const bolywood=(req,res)=>{
    return res.send(bolywoodData)
}
const holywood=(req,res)=>{
    return res.send(holywoodData)
}
const fitness=(req,res)=>{
    return res.send(fitnessData)
}
const food=(req,res)=>{
    return res.send(foodData)
}
const technology=(req,res)=>{
    return res.send(technologyData)
}
module.exports={home,bolywood,holywood,fitness,food,technology}